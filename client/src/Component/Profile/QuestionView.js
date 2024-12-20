import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuestionView = () => {
  const [data, setData ] = useState([]);
  const username = JSON.parse(localStorage.getItem("CodeStudio")).username;
  const fetchAnswer = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/v1/question/userquestion/${username}`
    );
    setData(res.data);
  };
  useEffect(() => {
    fetchAnswer();
  },[]);
  return (
    <div className={`w-full my-5 flex flex-col gap-3 ${data.length > 2 ? "overflow-y-scroll h-72" : ""}`}>
      {data && data.map((ele)=>{
        return <Link
        to={`/question/${ele.question.id}/${ele.question.title}/`}
        key={ele.question.id} 
        className="bg-white w-full h-28  p-3 rounded-xl flex items-center gap-2">
          <img src={ele.question.photo.length > 0 && ele.question.photo[0].data_url} alt=""  className=" w-24 h-24 rounded-full border"/>
          <div className=" flex justify-between w-full">
            <div className="flex flex-col">
              <span className=" font-bold text-xl"> {ele.question.title}</span>
              <span className="text-sm"> {new Date(ele.question.date).toDateString()}</span>
            </div>
            <div className="">
              Reaction
            </div>
          </div>
        </Link>
      })
      }
    </div>
  );
};

export default QuestionView;
