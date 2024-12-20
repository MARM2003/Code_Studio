import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { CiSquareQuestion } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
const SideMenu = () => {
  const [menuWidth, setMenuWidth] = useState("320px");
  const [userData, seUserData] = useState("");

  const toggleMenuWidth = () => {
    const newWidth = menuWidth === "320px" ? "60px" : "320px";
    setMenuWidth(newWidth);
    localStorage.setItem("menuUI", newWidth);
  };

  useEffect(() => {
    const storedWidth = localStorage.getItem("menuUI") || "320px";
    seUserData(JSON.parse(localStorage.getItem("CodeStudio")));
    setMenuWidth(storedWidth);
  }, []);

  return (
    <div
      className={`max-w-[${menuWidth}] sidemenu h-fit pt-8 pl-10 pr-10 pb-10 bg-white rounded-[17px] relative sticky top-32`}
    >
      <button
        className=" absolute top-4 right-5"
        onClick={() => toggleMenuWidth(menuWidth)}
      >
        <img src="./svg/dot.svg" className="" />
      </button>
      <ul className=" mt-4">
        <li className="menu grid h-14 justify-start w-full">
          <Link to="/" className="text-black text-2xl flex  items-center gap-1">
            {" "}
            <FiHome className=" 2xl:w-[34px] h-[34px] hover:text-orange-600" />
            {menuWidth === "320px" && (
              <p className="hover:text-orange-600">Home</p>
            )}
          </Link>
        </li>
        <li className="menu grid justify-start h-14 className='hover:text-orange-600' ">
          <Link
            to="/question"
            className="text-black text-2xl flex  items-center gap-1"
          >
            {" "}
            <CiSquareQuestion className=" 2xl:w-[34px] h-[34px] hover:text-orange-600" />{" "}
            {menuWidth === "320px" && (
              <p className="hover:text-orange-600">Question</p>
            )}{" "}
          </Link>
        </li>
        {userData && userData.profile && (
          <li className="menu grid justify-start h-14 className='hover:text-orange-600' ">
            <Link
              to="/chat"
              className="text-black text-2xl flex  items-center gap-1"
            >
              {" "}
              <RiMessage2Line className=" 2xl:w-[34px] h-[34px] hover:text-orange-600" />{" "}
              {menuWidth === "320px" && (
                <p className="hover:text-orange-600">Message</p>
              )}{" "}
            </Link>
          </li>
        )}
         {userData && userData.profile && (
        <li className="menu grid justify-start h-14">
          <Link
            to="/profile"
            className="text-black text-2xl flex  items-center gap-1"
          >
            {" "}
            <BiUser className=" 2xl:w-[34px] h-[34px] hover:text-orange-600" />{" "}
            {menuWidth === "320px" && (
              <p className="hover:text-orange-600">Profile</p>
            )}{" "}
          </Link>
        </li>
         )}
        {userData && (
          <li className="menu grid justify-start h-14">
            <Link
              to="/Logout"
              className="text-black text-2xl flex  items-center gap-1"
            >
              {" "}
              <IoExitOutline className=" 2xl:w-[34px] h-[34px] hover:text-orange-600 rotate-180" />{" "}
              {menuWidth === "320px" && (
                <p className="hover:text-orange-600">Logout</p>
              )}{" "}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideMenu;
