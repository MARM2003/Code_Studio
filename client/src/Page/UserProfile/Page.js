import React, { useEffect, useState } from "react";
import Navbar from "../../Component/UI/Navbar";
import SideMenu from "../../Component/UI/SideMenu";

import WorkingrRecord from "../../Component/Profile/WorkingrRecord";
import ProfileUpdate from "../../Component/UI/ProfileUpdate";
import { useNavigate } from "react-router-dom";
import Option from "../../Component/Profile/Option";
import ProfileInfo from "./ProfileInfo";
import QuestionView from "./QuestionView";
import AnswerView from "./AnswerView";

const Page = (location) => {
  const navigate = useNavigate();
  const { scrollPosition } = location.state || { scrollPosition: 0 };
  const [option,setOption]=useState("Question")
  const [showProfileComplete, setShowProfileComplete] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    document.body.classList.remove("overflow-hidden")
    const login = JSON.parse(localStorage.getItem("CodeStudio"));
    console.log(login);
    if (login) {
      if(!login.profile){
        setShowProfileComplete(true);

      }else{
        setShowProfileComplete(false);
      }
    }else{
      navigate("/login")
    }
  }, [navigate]);

  const handleProfileClick = (option) => {
    setShowProfileComplete(option);
  };

  return (
    <>
 <Navbar />
 <div className="flex gap-4 h-screen w-full">
   <SideMenu />
   <div className="flex flex-col h-full w-full">
     <div className="flex gap-4 my-4 w-11/12">
       <ProfileInfo />
       <div className=" flex gap-3 flex-col w-full">
         {/* <WorkingrRecord /> */}
         <div className=" w-full ">
           <Option handleoption={setOption} />
           {option && option==="Question" ?
             <QuestionView/>
             :<AnswerView/>
            }
         </div>
       </div>
     </div>
   </div>
 </div>
    </>
  );
};

export default Page;
