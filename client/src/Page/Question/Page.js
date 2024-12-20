import React, { useEffect } from "react";
import Navbar from "../../Component/UI/Navbar";
import SideMenu from "../../Component/UI/SideMenu";
import Question from "../../Component/Home/Question";
import KeywordSearch from "../../Component/UI/KeywordSearch";
import Option from "../../Component/Question/Add Question/Option";

const Page = (location) => {
  const { scrollPosition } = location.state || { scrollPosition: 0 };
  useEffect(() => {
    document.body.classList.remove("overflow-hidden")
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);
  return (
    <>
      <Navbar />
      <div className="flex my-4 gap-4">
        <SideMenu />
        <div className="flex flex-col w-full ">
          <Option />
          <Question />
        </div>
        <KeywordSearch />
      </div>
    </>
  );
};

export default Page;
