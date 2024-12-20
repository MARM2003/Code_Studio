import React from 'react'
import { AiFillEye, AiFillLike, AiOutlineMessage } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Question = ({data}) => {
  const {question}=data.question
  const {profile}=data.profile
  const filteredTags= question.tag.split(",")
  return (
    <div className=" bg-white rounded-xl w-full h-fit  py-8 pl-4 mb-4">
    <Link
      to={`/question/${question.id}/${question.title}/`}
      key={question.id}
      className=""
    >
      <div className="flex">
        {question.photo.length > 0 &&
          <img
          src={question && question.photo && question.photo[0].data_url}
          className="w-[200px] h-[244px] rounded-xl mr-3 object-cover"
          alt=""
          />
        }
        <div className="relative w-4/6">
          <div className="flex flex-col justify-between gap-2">
            <h4 class="w-[424px] text-black text-xl font-medium">
              {question && question.title}{" "}
            </h4>
            <div>
              <div class="text-black text-opacity-40 text-xs font-normal my-1">
                {question && question.data}
              </div>
              <div class="w-10/12 h-fit overflow-hidden text-black text-opacity-60 text-[14px] font-normal">
                {question && question.description}
              </div>
            </div>
          </div>
          <div className="tags flex flex-wrap mt-7 gap-2 h-fit my-10">
        {filteredTags.map(function (tag) {
          return (
            <Link
              to={`/question/${tag}/`}
              key={tag}
              className="w-fit border rounded-2xl py-1 px-2 hover:border-orange-600 capitalize">
              {tag.split('"')}
            </Link>
          );
        })}
      </div>
          <div className="flex h-fit">
            <div className="flex justify-center items-center gap-3 absolute left-0 bottom-0">
              {profile.image.length > 0 &&
                <img
                src={profile && profile.image}
                alt="profile-img"
                className="w-12 h-12 rounded-full object-cover"
                />
              }
              <div className="flex flex-col mt-4">
                <p className="text-black text-[25px] font-normal tracking-[1px]">
                  {profile && profile.name}
                </p>
                <p class="text-black text-opacity-40 text-xs font-normal mt-[-8px]">
                  {profile && profile.profession}
                </p>
              </div>
              
              
            </div>
            

              
              
            {/* <div className="reaction absolute right-0 bottom-0">
              <ul className="flex h-fit gap-2">
                <li className="flex gap-1 items-center">
                  <AiFillLike />
                  <p>{data && data.question.like}</p>
                </li>
                <li className="flex gap-1 items-center">
                  <AiOutlineMessage />
                  <p>{data && data.question.reply}</p>
                </li>
                <li className="flex gap-1 items-center">
                  <AiFillEye />
                  <p>{data && data.question.view}</p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
     
    </Link>
   </div>
  
  )
}

export default Question