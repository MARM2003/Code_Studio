import React, { useState } from "react";

const Option = ({ handleoption }) => {
  const [activeButton, setActiveButton] = useState("Question");
  const activeButtonStyle = "font-semibold";

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    handleoption(buttonName);
  };
  return (
    <div className=" w-full bg-white  rounded-md">
      <button
        className={`w-44 h-10 ${
          activeButton === "Question" ? activeButtonStyle : ""
        }`}
        onClick={() => handleClick("Question")}
      >
        Question
      </button>
      <button
        className={`w-44 h-10  ${
          activeButton === "Answer" ? activeButtonStyle : ""
        }`}
        onClick={() => handleClick("Answer")}
      >
        Answer
      </button>
    </div>
  );
};

export default Option;
