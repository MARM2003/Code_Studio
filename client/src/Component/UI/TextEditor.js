import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import MonacoEditor from "react-monaco-editor";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.snow.css";
import "monaco-editor/esm/vs/editor/editor.all.js";
import { useParams } from "react-router-dom";
const TextEditor = () => {
  const { questionId } = useParams();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("CodeStudio"))
  );
  const [content, setContent] = useState("");
  const [code, setCode] = useState("");
  const [showMonacoEditor, setShowMonacoEditor] = useState(false);
  const [CodeSyntax, SetCodeSyntax] = useState(false);

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["code"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code",
  ];

  const handleQuillChange = (value) => {
    setContent(value);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  useEffect(() => {
    const quill = document.querySelector(".quill"); // Adjust the selector based on your Quill container class
    if (quill) {
      quill.addEventListener("click", handleCodeButtonClick);
    }

    return () => {
      if (quill) {
        quill.removeEventListener("click", handleCodeButtonClick);
      }
    };
  }, []);

  const handleCodeButtonClick = () => {
    // Check if the "code" format is active
    const quill = document.querySelector(".quill");
    const isCodeActive = quill && quill.querySelector(".ql-code"); // Adjust the selector based on your Quill container class
    if (isCodeActive) {
      // "Code" button is clicked when the "code" format is active
      setShowMonacoEditor(true);
    }
  };

  const handleSave = async () => {
    console.log(data);
    const res = await axios.post(
      "http://localhost:4000/api/v1/question/addAnswer/",
      {
        id: questionId,
        username: data.username,
        explain: content,
        fixcode: code,
        date: Date(),
      }
    );
    if (res.data) {
      window.location.reload();
    }
    console.log(res);
    SetCodeSyntax(true);
    setShowMonacoEditor(false);
  };

  return (
    <>
      <div className="w-11/12 m-auto my-7">
        <div class="text-black text-3xl my-5">Write Your Answer</div>
        <div className="my-10 ">
          <ReactQuill
            theme="snow"
            value={content}
            modules={quillModules}
            formats={quillFormats}
            onChange={handleQuillChange}
          />
        </div>
        {showMonacoEditor && (
          <div className=" h-96 flex flex-col gap-3 my-5  ">
            <p className=" text-xl ">Write Code </p>
            <MonacoEditor
              language="javascript"
              theme="vs-dark"
              value={code}
              options={{ minimap: { enabled: false } }}
              onChange={handleCodeChange}
            />
          </div>
        )}
      </div>
      <div className=" w-full flex justify-end">
        <button
          onClick={handleSave}
          className=" text-white bg-orange-600 px-5 py-3 rounded-lg">
          Final
        </button>
      </div>
    </>
  );
};

export default TextEditor;
