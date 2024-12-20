import React, { useEffect, useState } from "react";

const Heading = ({ dataFunction }) => {
  const [heading, setHeading] = useState();
  const [description, setDescription] = useState();
  const [tagName,setTagName]=useState();
  useEffect(() => {
    dataFunction(heading,tagName, description);
  }, [heading,tagName, description]);

  return (
    <div className=" flex flex-col w-full  gap-3 items-center  ">
      <input
        type="text"
        onChange={(e) => setHeading(e.target.value)}
        placeholder="Enter Question title"
        className=" pl-4 border border-black rounded-md w-96 h-10 focus:outline-orange-600"
      />
        <textarea
        onChange={(e) => setTagName(e.target.value)}
        placeholder="Enter the Problem"
        className=" border border-black rounded-md p-2 w-96 h-28 focus:outline-orange-600"
      ></textarea>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the Problem"
        className=" border border-black rounded-md p-2 w-96 h-56 focus:outline-orange-600"
      ></textarea>
    </div>
  );
};

export default Heading;
