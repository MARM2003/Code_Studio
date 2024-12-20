import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import FormTitle from "../FormTitle";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const data={
      username:username,
      password:password
    }
    console.log(username, password);
    const res = await axios.post("http://localhost:4000/api/v1/user/",data)
    if (res.data.status === "Login") {


      localStorage.setItem(
        "CodeStudio",
        JSON.stringify({
          id: res.data.data._id,
          username: username,
          email: res.data.data.email,
          profile: {
            name: res.data.data.profile.name,
            profession: res.data.data.profile.profession,
            about: res.data.data.profile.about,
            image: res.data.data.profile.image,
            tag: res.data.data.profile.Skill,
          },
        })
      );
      navigate("/profile")
  }
  }

  useEffect(()=>{
    const login=JSON.parse(localStorage.getItem("CodeStudio"))
    console.log(login)
    if(login && login.username){
      navigate("/profile")
    }
  })
  return (
    <div className="w-1/2 h-screen flex items-center">
      <form className=" w-full h-min pt-16 flex justify-center items-center flex-col">
        <div className="heading w-7/12 h-16 mb-12 relative">
          <FormTitle title="Login" />
        </div>
        <div className="input w-7/12 h-16 relative flex items-center mb-4">
          <FaRegUser className=" absolute left-4 w-7 h-7" />
          <input
            type="text"
            className="w-full h-full text-zinc-500 text-xl font-normal pl-16 focus:outline-orange-600 border border-black rounded-lg"
            placeholder="username / email"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input w-7/12 h-16 relative flex items-center mb-6">
          <BiSolidLockAlt className=" absolute left-4 w-8 h-7" />
          <input
            type="password"
            className="w-full h-full text-zinc-500 text-xl font-normal pl-16 focus:outline-orange-600 border border-black rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className=" option w-7/12 flex justify-end"></div>
        <button
          type="submit"
          className="w-7/12 h-16 bg-orange-500 rounded hover:rounded-lg border border-orange-500 text-white text-[25px] font-normal mt-3"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="w-7/12 h-16 flex items-center justify-between">
          <Link
            to="/register"
            className="text-orange-500 text-[17px] font-normal"
          >
            <span className="text-zinc-500 text-[17px] font-normal">
              Create New Account ?{" "}
            </span>
            Sign
          </Link>
          <p>Forgot?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
