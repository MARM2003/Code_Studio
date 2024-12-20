import React, { useEffect, useState } from "react";
import Form from "./Edit-UI/Form";

const Edit = () => {
  const [showForm, setShowForm] = useState(false);


  useEffect(()=>{
    document.body.classList.remove("overflow-hidden")
  },[])
  const handleForm = (value) => {
    setShowForm(value);
  };
  return (
    <div className="w-[265px] h-[39px] bg-green-300 bg-opacity-20 rounded-md flex justify-center items-center my-4 p-3">
      <button
        className="text-[#20e520ab] text-xl font-normal font-['Poppins']"
        onClick={() => handleForm(true)}
      >
        Update profile
      </button>
      {showForm && <Form showFunction={handleForm} />}
    </div>
  );
};

export default Edit;
