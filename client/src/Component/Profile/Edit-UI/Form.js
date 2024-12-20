import React, { useEffect, useState } from "react";
import Image from "../Image";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = ({ showFunction }) => {
  const [userData, seUserData] = useState(
    JSON.parse(localStorage.getItem("ProfileInformation"))
  );
  const navigate = useNavigate();
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("CodeStudio")).username
  );
  const [Name, setName] = useState("");
  const [Profession, setProfession] = useState("");
  const [About, setAbout] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (image) => {
    setImage(image);
  };

  const handleShowForm = (value) => {
    document.body.classList.remove("overflow-hidden");
    showFunction(value);
  };

  const handleUpdateProfile = async () => {
    const data = {
      username: username,
      name: Name,
      profession: Profession,
      about: About,
      keyword: Keyword,
      image: image,
    };
    const res = await axios.post(
      "http://localhost:4000/api/v1/user/updateProfile",
      data
    );
    if (res) {
      localStorage.setItem(
        "CodeStudio",
        JSON.stringify({
          id: res.data.id,
          username: username,
          email: res.data.email,
          profile: {
            name: res.data.profile.name,
            profession: res.data.profile.profession,
            about: res.data.profile.about,
            image: res.data.profile.image,
            tag: res.data.profile.Skill,
          },
        })
      );
      window.location.reload();
    }
  };
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);
  return (
    <div className=" z-20 absolute top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex items-center justify-center overflow-hidden">
      <div className=" w-8/12 h-fit bg-white p-10 rounded-md  flex flex-col gap-5">
        <h2 className=" text-2xl font-bold">Update Profile</h2>

        <div className="flex gap-10 items-end">
          <Image dataFunction={handleImage} />
          <div className="flex gap-5 flex-col">
            <div className=" flex gap-5  ">
              <input
                type="text"
                placeholder="Enter Name"
                className=" pl-5 rounded-md w-full h-10 text-black text-xl font-normal focus:outline-orange-600 border border-black "
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="professional"
                className="   pl-5 rounded-md w-full h-10 text-black text-xl font-normal focus:outline-orange-600 border border-black "
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Tags"
              className="   pl-5 rounded-md w-full h-20 text-black text-xl font-normal focus:outline-orange-600 border border-black "
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>

        <textarea
          className="p-5 rounded-md w-full h-48 text-black text-xl font-normal focus:outline-orange-600 border border-black "
          placeholder="Write About Your Self"
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>

        <button
          className=" bg-orange-400 h-fit p-6 rounded-xl"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
      <button
        className="  border border-black p-3 absolute top-10 right-10 rounded-full "
        onClick={() => handleShowForm(false)}
      >
        <IoMdClose className=" text-white " />
      </button>
    </div>
  );
};

export default Form;
