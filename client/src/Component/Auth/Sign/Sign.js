import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { BiSolidLockAlt, BiSolidLockOpenAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import FormTitle from "../FormTitle";

const Sign = () => {
  const navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [coPass, setcoPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass === coPass) {
      const signData = {
        UserName: UserName,
        email: email,
        password: pass,
      };
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/signup",
        signData
      );
      console.log(res);
      if (res.data.status === "login") {
        localStorage.setItem("CodeStudio", JSON.stringify(res.data.data));
        navigate("/profile");
      }
      if(res.data.status==="error"){
        toast.error(res.data.data, {
          position: "top-right"
        });
      }
    } else {
      toast.error("Both Password not Match", {
        position: "top-right"
      });

    }
  };

  useEffect(()=>{
    const login=JSON.parse(localStorage.getItem("CodeStudio"))
    console.log(login)
    if(login && login._id){
      navigate("/profile")
    }
  })

  return (
    <>
     <ToastContainer />
      <form className="w-1/2 h-screen flex items-center">
        <div className=" w-full h-min pt-16 flex justify-center items-center flex-col">
          <div className="heading w-fit h-16 mb-6 relative -ml-12">
            <FormTitle title="Create Your account" />
          </div>
          <div className="input w-7/12 h-16 relative flex items-center mb-4">
            <FaRegUser className=" absolute left-4 w-7 h-7" />
            <input
              type="text"
             className="w-full h-full text-zinc-500 text-xl font-normal pl-16 focus:outline-orange-600 border border-black rounded-lg"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="input w-7/12 h-16 relative flex items-center mb-4">
            <FaRegUser className=" absolute left-4 w-7 h-7" />
            <input
              type="email"
             className="w-full h-full text-zinc-500 text-xl font-normal pl-16 focus:outline-orange-600 border border-black rounded-lg"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input w-7/12 h-16 relative flex items-center mb-6">
            <BiSolidLockOpenAlt className=" absolute left-4 w-8 h-7" />
            <input
              type="password"
             className="w-full h-full text-zinc-500 text-xl font-normal pl-16 focus:outline-orange-600 border border-black rounded-lg"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <div className="input w-7/12 h-16 relative flex items-center mb-6">
            <BiSolidLockAlt className=" absolute left-4 w-8 h-7" />
            <input
              type="password"
             className="w-full h-full text-zinc-500 text-xl font-normal pl-16 focus:outline-orange-600 border border-black rounded-lg"
              placeholder="Confirm Password"
              onChange={(e) => setcoPass(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-7/12 h-16 bg-orange-500 rounded border border-orange-500 text-white text-[25px] font-normal mt-3"
            onClick={handleSubmit}
          >
            Create New Account
          </button>
          <div className="w-7/12 h-16 mt-6 gap-2">
            <span className="text-zinc-500 text-[17px] font-normal">
              Already Have Account ?
            </span>
            <Link
              to="/login"
              className="text-orange-500 text-[17px] font-normal"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Sign;
