import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageView from "./MessageView";

const Chat = ({ from, recieve }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");
  const [ws, setWs] = useState(null);

  const to = recieve.username;

  const fetchMessages = () => {
    if (from && to) {
      axios
        .get("http://localhost:4000/api/v1/chat/messages", {
          params: {
            from,
            to,
          },
        })
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [from, to]);

  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:4000");

    newWs.onopen = () => {
      setConnectionStatus("Connected");
      console.log("WebSocket connection established");
      if (from) {
        newWs.send(JSON.stringify({ type: "register", username: from }));
      }
    };

    newWs.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("New message received:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    newWs.onerror = (error) => {
      console.error("WebSocket error:", error);
      setConnectionStatus("Error");
    };

    newWs.onclose = () => {
      console.log("WebSocket connection closed");
      setConnectionStatus("Disconnected");
    };

    setWs(newWs);

    return () => {
      if (newWs) {
        newWs.close();
      }
    };
  }, [from]);

  const handleSend = () => {
    if (!input.trim()) {
      console.warn("Cannot send empty message");
      return;
    }

    const message = {
      from,
      to,
      date: new Date().toISOString(),
      content: input,
    };

    if (ws && ws.readyState === WebSocket.OPEN) {
      console.log("Sending message:", message);
      ws.send(JSON.stringify(message));
      setInput("");
      setMessages((prevMessages) => [...prevMessages, message]);
    } else {
      console.log("WebSocket is not open. Current state:", ws.readyState);
    }
  };
  console.log(messages)
  return (
    <div className="relative h-full p-4 w-full">
      <MessageView data={messages} from={from} to={to} />
      <div className="absolute bottom-0 left-0 flex w-full h-fit">
        <input
          className="border border-rose-400 bg-white w-full py-3 pl-5 mr-1 rounded-md mb-1 ml-1"
          type="text"
          placeholder="chat"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="border bg-white border-black py-3 w-28 rounded-md mb-1 mr-1" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
