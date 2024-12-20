import React, { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import "monaco-editor/esm/vs/editor/editor.all.js";

const CodeEditor = ({ dataFunction }) => {
  const [code, setCode] = useState("");
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  useEffect(() => {
    dataFunction(code);
  }, [code]);
  return (
    <MonacoEditor
      language="javascript"
      theme="vs-dark"
      value={code}
      options={{ minimap: { enabled: false } }}
      onChange={handleCodeChange}
    />
  );
};

export default CodeEditor;
