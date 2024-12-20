import React from "react";
import { IoClose } from "react-icons/io5";
const ProfileUpdate = ({handleProfileFun}) => {
  
  return (
    <div className=" border bg-orange-500 w-full h-20 rounded-lg m-auto my-2 p-4 flex items-center justify-between">
      <span className=" text-white font-bold text-xl ">
        Complete Your Profile
      </span>
      <button className="border border-white  p-2 flex items-center justify-center text-white rounded-full" onClick={()=>handleProfileFun(false)}>
        <IoClose className=" text-base" />
      </button>
    </div>
  );
};

export default ProfileUpdate;
