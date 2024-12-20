import React, { useEffect, useState } from 'react';
import SingleQuestion from "../UI/Question";
import axios from 'axios';
import Skeleton_Question from '../UI/Skeleton_Question';
import { useParams } from 'react-router-dom';

const Question = () => {
  const { tag } = useParams();
  const [listQuestion, setListQuestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const getQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/question");
      
      let filteredData = response.data;
      if (tag) {
        filteredData = response.data.filter((ele) => {
          let tags = ele.question.question.tag.split(",");
          return tags.includes(tag);
        });
      }
      
      setListQuestion(filteredData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getQuestion();
  }, [tag]);

  return (
    <>
      {!loading ? (
        <div className='w-full'>
          {listQuestion.map((ele) => (
            <SingleQuestion key={ele.id} data={ele} />
          ))}
        </div>
      ) : (
        <Skeleton_Question />
      )}
    </>
  );
};

export default Question;
