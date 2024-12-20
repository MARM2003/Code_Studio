import axios from 'axios';
import React, { useEffect, useState } from 'react'

const WorkingrRecord = () => {
  const [data, setData ] = useState([]);
  const username = JSON.parse(localStorage.getItem("CodeStudio")).username;
    const getDaysInMonth = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
      };
    
      const getMonthLabel = (year, month) => {
        const monthNames = [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ];
        return `${monthNames[month]} ${year}`;
      };
    
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
    
      // Array to store all the days for the last 4 months
      let calendarMonths = [];
    
      for (let i = 0; i < 5; i++) {
        const targetMonth = new Date(currentYear, currentMonth - i, 1);
        const daysInMonth = getDaysInMonth(targetMonth.getFullYear(), targetMonth.getMonth());
    
        // Array of week day labels
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
        // Array to store all the days for the calendar
        let calendarDays = [];
    
        // Calculate the first day of the month
        const firstDayOfMonth = targetMonth.getDay();
    
        // Add empty boxes for days of the previous month
        for (let j = 0; j < firstDayOfMonth; j++) {
          calendarDays.push({ day: null, inCurrentMonth: false });
        }
    
        // Add days of the current month
        calendarDays = calendarDays.concat(
          daysInMonth.map((day) => ({ day, inCurrentMonth: true }))
        );
    
        // Calculate the number of empty boxes needed at the end
        const remainingDays = 7 - (calendarDays.length % 7);
    
        // Add empty boxes for remaining days
        for (let j = 0; j < remainingDays; j++) {
          calendarDays.push({ day: null, inCurrentMonth: false });
        }
    
        // Group days into rows
        const rows = [];
        for (let j = 0; j < calendarDays.length; j += 7) {
          rows.push(calendarDays.slice(j, j + 7));
        }
    
        calendarMonths.push({
          monthLabel: getMonthLabel(targetMonth.getFullYear(), targetMonth.getMonth()),
          rows
        });
      }

      // console.log(calendarMonths)
      
      const fetchAnswer = async () => {
        let workingData = [];
        try {
          const res = await axios.get(`http://localhost:4000/api/v1/question/userquestion/${username}`);
          // console.log(res.data);
      
          res.data.map((ele) => {
            
            if(ele.question){
              workingData.push(ele.question)
              console.log("Hello")
            }
            
            ele.answer.map((ele)=>{
              console.log(ele)
              if(ele.username===username){
                console.log("Hello")
                workingData.push(ele)
              }
            })
          });
          setData(workingData)
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error
        }
      };
      useEffect(() => {
        fetchAnswer();
      },[]);
      

  let tempdata="2024-06-24T09:17:16.959+00:00"
  // console.log(new Date(tempdata).toDateString())

  calendarMonths.forEach((month, monthIndex) => {
    month.rows.forEach((row, rowIndex) => {
      row.forEach(({ day, inCurrentMonth }, index) => {
        const matchingData = data.filter((ele) => {
          const dateToMatch = new Date(currentYear, monthIndex, day);
          return ele.date === dateToMatch;
        });
  
        console.log(`Matching data for ${day}/${monthIndex + 1}/${currentYear}:`, matchingData);
      });
    });
  });
  
 

  if(data){
    console.log(data)
  }
  return (
    <div class=" w-full h-fit bg-white rounded-[14px] py-4 px-6">
    <div className='flex justify-between'>
    <div><span className="text-black text-[15px] font-bold font-['Poppins']">150</span><span className="text-black text-[15px] font-normal font-['Poppins']"> Solution in Last 5 months </span></div>
    <div class="text-black text-[15px] font-normal font-['Poppins']">25 Question in Last 5 months </div>
    </div>

    <div className='flex gap-5'>
      {calendarMonths.map((month, monthIndex) => (
        <div key={`calendar-month-${monthIndex}`} className="">
          <h2>{month.monthLabel}</h2>
          {month.rows.map((row, rowIndex) => (
            <div key={`calendar-row-${monthIndex}-${rowIndex}`} className="grid grid-cols-7">
              {row.map(({ day, inCurrentMonth }, index) => (
               <div class="w-[15px] h-[15px]  rounded-sm m-1">
                  {day !== null ? (
                   <div class="w-[15px] h-[15px] border rounded-sm  ">
                      {/* {day} */}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>


    </div>
  )
}

export default WorkingrRecord