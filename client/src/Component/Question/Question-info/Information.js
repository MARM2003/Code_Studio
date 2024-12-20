import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CodeHighLighter from "../../UI/CodeHighLighter";

const Information = ({ answer }) => {
  const [questionUsername, setQuestionUsername] = useState(null);
  const [questionData, setQuestionData] = useState("");
  const [userData, setUserData] = useState("");
  const { questionId } = useParams();
  const [loading, setLoading] = useState(true);

  const fetchData = async (questionId) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/api/v1/question/${questionId}`
      );
      console.log(result.data);
      setQuestionUsername(result.data.question.username);
      setQuestionData(result.data.question.question);
      setUserData(result.data.user.profile);
      answer(result.data.answersWithUserProfiles);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(questionId);
  }, [questionId]);

  console.log(questionData);
  return (
    <>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div className=" w-full bg-white rounded-xl p-5 relative ">
          <Link
            to={`/user/${questionUsername}`}
            className="flex items-center gap-3 "
          >
            {userData && userData.image.length > 0 && (
              <img
                src={userData && userData.image}
                alt="profile-img"
                className="w-12 h-12 rounded-full object-cover border border-black"
              />
            )}
            <div className="flex flex-col">
              <p className="text-black text-[25px] font-normal tracking-[1px]">
                {userData.name}
              </p>
              <p class="text-black text-opacity-40 text-xs font-normal mt-[-8px]">
                {userData.profession}
              </p>
            
            </div>
          </Link>
          <div>
            <div className="text-black text-3xl font-normal mt-3">
              {questionData.title}
            </div>
            <div className="flex items-center">
              <div class="text-black text-opacity-40 text-xs font-normal my-1">
                {new Date(questionData.date).toDateString()}
              </div>
              <div className="reaction">
                {/* <ul className="flex h-fit gap-0">
        <li className="flex items-center">
          <AiFillLike />
          {foundQuestion.question.like}
        </li>
        <li className="flex items-center">
          <AiOutlineMessage />
          {foundQuestion.question.reply}
        </li>
        <li className="flex items-center">
          <AiFillEye />
          {foundQuestion.question.view}
        </li>
      </ul> */}
              </div>
            </div>
          </div>
          <div className="text-black text-opacity-60 text-xl font-normal w-10/12 h-fit mt-3">
            {questionData.description}
          </div>
          <div className="mt-12 w-full gap-6 flex flex-wrap justify-center">
            <div className=" w-full flex flex-wrap gap-3 justify-center">
              {questionData.photo &&
                questionData.photo.map((ele, index) => (
                  <img
                    className="w-96 object-cover rounded-xl"
                    src={ele.data_url}
                    alt=""
                  />
                ))}
            </div>
            {questionData && (
              <div class="w-fit h-fit bg-white rounded-[9px] shadow flex px-9 py-4 border">
                <CodeHighLighter
                  code={questionData.ErrorCode}
                  language={questionData.language}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Information;
