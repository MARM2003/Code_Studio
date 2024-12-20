import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeHighLighter from "../../UI/CodeHighLighter";
const View = ({ data }) => {
  console.log(data)
  const {answer}=data;
  const {profile}=data.userProfile
  console.log(answer,profile)
  return (
    <div className=" max-w-[95%] h-fit bg-white rounded-xl p-5 mx-4 my-2">
      <div className="flex items-center gap-3 ">
        
          <img
            src={profile.image}
            alt="profile-img"
            className="w-12 h-12 rounded-full object-cover"
          />
        <div className="flex flex-col">
          <p className="text-black text-[25px] font-normal tracking-[1px]">
            {profile.name}
          </p>
          <p class="text-black text-opacity-40 text-xs font-normal mt-[-8px]">
            {profile.profession}
          </p>
        </div>
      </div>
      {answer && (
        <>
          <div>
            <div className="flex items-center">
              <div class="text-black text-opacity-40 text-xs font-normal my-1">
                <>
              {new Date(answer.date).toUTCString()}
                </>
              </div>
              <div className="reaction">
                <ul className="flex h-fit gap-0">
            {/* <li className="flex items-center">
              <AiFillLike />
              {data.Comment.code.like}
            </li>
            <li className="flex items-center">
              <AiOutlineMessage />
              {data.Comment.code.reply}
            </li>
            <li className="flex items-center">
              <AiFillEye />
              {data.Comment.code.view}
            </li> */}
          </ul>
              </div>
            </div>
          </div>
          <div
            className="answercontainer text-black text-opacity-40 text-2xl font-normal w-8/12 h-fit mt-3"
            dangerouslySetInnerHTML={{ __html: answer.explanation }}></div>

          <div className=" mt-12 flex flex-col justify-center items-center gap-6">
            <div class="w-fit h-fit bg-white rounded-[9px] shadow flex px-9 py-4 border">
              <CodeHighLighter code={answer.code} language="javascript" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default View;
