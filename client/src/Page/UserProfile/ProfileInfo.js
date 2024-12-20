import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProfileInfo = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [tag, setTag] = useState([]);

  const userInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/v1/user/${username}`);
      const fetchedData = res.data.result;
      setData(fetchedData);
      if (fetchedData && fetchedData.profile && fetchedData.profile.Skill) {
        const skills = fetchedData.profile.Skill.split(",");
        setTag(skills);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    if (username) {
      userInfo();
    }
  }, [username]);

  return (
    <div className="w-80 h-fit bg-white rounded-2xl px-7 pt-9 pb-10">
      <div className="img flex items-center gap-3 mb-4">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src={data?.profile?.image || ""}
          alt="Profile"
        />
        <div className="flex flex-col gap-1">
          <div className="text-black text-lg font-normal font-['Poppins'] tracking-tight">
            {data?.username || ""}
          </div>
        </div>
      </div>
      <div className="content flex flex-col">
        <p className="text-black text-base font-normal font-['Poppins'] pb-[10px]">
          About
        </p>
        <div className="w-[252px] h-[3px] border border-white bg-gradient-to-r from-[#FFFFFF] via-[#000000] to-[#FFFFFF]"></div>
        <div className="w-64 h-fit py-2">
          <span className="text-black text-opacity-80 text-sm font-thin font-['Poppins'] ">
            {data?.profile?.about || ""}
          </span>
        </div>
      </div>
      <div className="content flex flex-col mt-5">
        <p className="text-black text-[15px] font-normal font-['Poppins'] pb-[10px]">
          Language Solved
        </p>
        <div className="w-[252px] h-[3px] border border-white bg-gradient-to-r from-[#FFFFFF] via-[#000000] to-[#FFFFFF]"></div>
        <div className="flex flex-wrap mt-3 gap-2 h-fit">
          {tag.map((ele, index) => (
            ele.trim() !== "" && (
              <div
                key={index}
                className="tag w-fit h-7 p-2 rounded-[28px] border border-black hover:bg-orange-500 hover:border-orange-500 flex justify-evenly items-center cursor-pointer"
              >
                <div className="tag-text w-fit h-4 text-black text-xs font-light font-['Poppins'] tracking-wider flex justify-evenly items-center hover:text-white">
                  {ele}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
