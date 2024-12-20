import React, { useEffect, useState } from "react";
import Navbar from "../../Component/UI/Navbar";
import SideMenu from "../../Component/UI/SideMenu";
import QuestionInformation from "../../Component/Question/Question-info/Information";
import Write from "../../Component/Question/Comment/Write";
import View from "../../Component/Question/Comment/View";

const Page = (location) => {
  const { scrollPosition } = location.state || { scrollPosition: 0 };
  useEffect(() => {
        document.body.style.overflowY="scroll"
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);
  const [answer, setAnswer] = useState(null);
  const handleAnswer = async (value) => {
    setAnswer(value);
  };
  console.log(answer);
  return (
    <>
      <Navbar />
      <div className=" flex justify-between my-4 gap-4">
        <SideMenu />
        <div className=" flex flex-col w-full">
          <QuestionInformation answer={handleAnswer} />
          <Write />
          {answer &&
            answer.length >= 1 &&
            answer
              .slice()
              .reverse()
              .map((ele, index) => <View key={index} data={ele} />)}
        </div>
      </div>
    </>
  );
};

export default Page;
