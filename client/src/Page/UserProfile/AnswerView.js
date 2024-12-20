import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AnswerView = () => {
  const [data, setData] = useState([]);
  const {username} = useParams();
  const fetchAnswer = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/v1/question/useranswer/${username}`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchAnswer();
  }, []);
  return <div className={`w-full my-5 flex flex-col gap-3 ${data.length > 2 ? "overflow-y-scroll h-72" : ""}`}>
  {data && data.map((ele)=>{
    return <Link
    to={`/question/${ele.question.id}/${ele.question.title}/`}
    key={ele.question.id} 
    
    className="bg-white w-full h-28  p-3 rounded-xl flex items-center gap-2">
      <img src={ele.question.photo && ele.question.photo[0].data_url} alt=""  className=" w-24 h-24 rounded-full border"/>
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
</div>;
};

export default AnswerView;
