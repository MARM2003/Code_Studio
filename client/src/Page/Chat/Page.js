import React, { useEffect, useState } from "react";
import Navbar from "../../Component/UI/Navbar";
import SideMenu from "../../Component/UI/SideMenu";
import Question from "../../Component/Home/Question";
import KeywordSearch from "../../Component/UI/KeywordSearch";
import Option from "../../Component/Question/Add Question/Option";
import List from "../../Component/Chat/List";
import Chat from "../../Component/Chat/Chat";
const Page = () => {
  const [userSelect, setUserSelect] = useState("");
  const [username,setUsername]=useState(JSON.parse(localStorage.getItem("CodeStudio")).username)
  console.log(JSON.parse(localStorage.getItem("CodeStudio")).username)
  const handleUserSelect = (user) => {
    console.log(user);
    setUserSelect(user);
  };

  console.log(username)
  useEffect(()=>{
    document.body.classList.add("overflow-hidden")
  },[])
  return (
    <>
      <>
        <Navbar />
        <div className="flex my-4 gap-4">
          <SideMenu />
          <div className="flex w-full h-[80vh] ">
            {username &&
            <List from={username} handleUserSelect={handleUserSelect} />
            }
            {
              userSelect &&
              <Chat from={username} recieve={userSelect} />

            }
          </div>
        </div>
      </>
    </>
  );
};

export default Page;
