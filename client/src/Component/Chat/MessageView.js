import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
const MessageView = (props) => {
  
  const bottomRef = useRef(null);
  const { data, from, to } = props;
  function formatDate(dateString) {
    let d = new Date(dateString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let day = d.getUTCDate();
    let month = months[d.getUTCMonth()];
    let year = d.getUTCFullYear();
    let hours = d.getUTCHours();
    let minutes = d.getUTCMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${day} ${month} ${year} ${hours}:${minutes}${ampm}`;
  }


  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView();
    }
  }, [data]); // Trigger this effect when `data` (messages) changes
    

  return (
    <div className="w-full h-full relative">
    {to && (
      <div class="text-black text-xl sticky top-0 left-0 border border-black border-l-0 border-r-0 border-t-0 pt-8 pb-4 pl-8 bg-white rounded-t-lg">
        {to}
      </div>
    )}

    <div className="flex flex-col gap-3 h-[60vh] overflow-y-scroll">
      {data.map((ele) => (
        <div className="w-full h-fit my-2 px-5" key={ele.date}>
          <div class={`w-fit  h-fit  rounded-[10px] px-2 py-1 flex flex-col gap-1 items-end ${ele.from === from ? "bg-orange-600 float-right text-white" : "bg-white"} `}>
            <span>{ele.content}</span>
            <span class="opacity-50 text-black text-xs">
              {" "}
              {new Date(ele.date).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                hour12: true,
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  </div>
  );
};

export default MessageView;
