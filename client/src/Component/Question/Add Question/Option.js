import React, { useEffect, useState } from "react";
import Form from "./Form";

const Option = () => {
  const [show, setShow] = useState(false);
  const handleOpen = (value) => {
    setShow(value);
  };
  useEffect(()=>{
    document.body.classList.add("overflow-hidden")

  },[])
  return (
    <div className="flex w-full justify-end my-5">
      <button
        className="bg-orange-600 w-fit rounded-xl text-white text-base px-5 h-10 mr-5"
        onClick={() => handleOpen(true)}
      >
        Add
      </button>
      {show && <Form showFunction={handleOpen} />}
    </div>
  );
};

export default Option;
