import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Api_GroupList from "./Api_GroupList";
import axios from 'axios'


const List = ({ from,handleUserSelect }) => {

  console.log(from)
  
  
  const [data, setData] = useState();
  const handleSearch = async(e) => {
    const res = await axios.get(`http://localhost:4000/api/v1/chat/userList`)
    console.log(res.data)
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm !== "") {
      const filteredResults = res.data.filter((ele) =>
        ele.username.toLowerCase().includes(searchTerm)
      );
      setData(filteredResults);
    } else {
      FetchUser()
    }
  };


  const FetchUser=async()=>{
    const res = await axios.get(`http://localhost:4000/api/v1/chat/user/${from}`)
    console.log(res.data)
    if(res.data){
      let data=[]
      res.data.map((ele)=>{
        if(ele.profile){
          data.push(ele)
        }
      })
      console.log(data[0])
      setData(data)
      handleUserSelect(data[0])
    }
  }
  useEffect(()=>{
    FetchUser()
  },[])

  return (
    <div className=" w-80 h-full bg-white rounded-xl py-6 px-2 cursor-pointer overflow-hidden overflow-y-scroll">
      <div className="search flex items-center relative ">
        <input
          className=" w-full focus:border border border-black focus:border-orange-600 h-8  rounded-[7px] text-black text-lg font-light tracking-[3.24px] focus:outline-none pl-8 py-5"
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
        <AiOutlineSearch className="absolute left-3" />
      </div>

      {data && data.map(function (group) {
        {console.log(group)}
        return (
          <button
            onClick={() => handleUserSelect(group)}
            className="w-full h-10 py-2 px-3 flex items-center gap-4 mt-3 my-4"
            key={group.id}
          >
            <img
              className="rounded-full w-9 h-9 object-cover"
              src={group && group.profile && group.profile.image &&group.profile.image}
              alt="Group Avatar"
            />
            <div className="text-black text-xl font-normal font-['Poppins'] tracking-widest">
              {/* {group.GroupDetail.GroupName.length > 11
                ? `${group.GroupDetail.GroupName.slice(0, 11)}`
                : group.GroupDetail.GroupName} */}
                {/* {group.profile.name} */}
                {group.username}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default List;
