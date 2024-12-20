import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/UI/Navbar'
import SideMenu from '../../Component/UI/SideMenu'
import KeywordSearch from '../../Component/UI/KeywordSearch'
import Question from '../../Component/Home/Question'
import ProfileUpdate from '../../Component/UI/ProfileUpdate'

const Page = (location) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("CodeStudio")));
  const { scrollPosition } = location.state || { scrollPosition: 0 };

  useEffect(() => {
    document.body.classList.remove("overflow-hidden")
    console.log(data);
    setData(JSON.parse(localStorage.getItem("CodeStudio")));
  
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);
  return (
    <>
        <Navbar/>
        <div className='flex w-full gap-4 my-4'>
            <SideMenu/>
            <Question/>
            <KeywordSearch/>
        </div>
    </>
  )
}

export default Page