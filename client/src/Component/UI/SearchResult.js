import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleMovie from "../UI/Question"
const SearchResult = ({search}) => {
    
    const [listQuestion,setListQuestion]=useState([])
    const [filterQuestion,setFilterQuestion]=useState([])
    const getQuestion=async()=>{
      const data=await axios.get("http://localhost:4000/api/v1/question")
      console.log(data.data)
      setListQuestion(data.data)
    }
    useEffect(()=>{
      getQuestion()
    },[])
    useEffect(()=>{

        if (listQuestion.length > 0) {
            console.table(listQuestion);
            const filteredData = listQuestion.filter((ele) => {
                const isTitleIncluded = ele.question.question.title.toLowerCase().includes(search.toLowerCase());
                console.log(isTitleIncluded); // Log whether the title includes the search query
                return isTitleIncluded; // Return true or false based on the condition
            });
            setFilterQuestion(filteredData); // Log the filtered data
        }
    },[search])
    
  return (
    <div className=' absolute top-28 left-0 w-full h-screen bg-black bg-opacity-50 overflow-hidden'>
        <div className=' bg-white w-2/3 h-96  mx-auto my-2 rounded-xl overflow-y-scroll'>
        {filterQuestion && filterQuestion.map((ele) => (
        <SingleMovie key={ele.id} data={ele} /> 
      ))}
    
        </div>
    </div>
  )
}

export default SearchResult