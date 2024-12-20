import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

const Navbar = () => {
  const [userData, seUserData] = useState("");
  useEffect(() => {
    seUserData(JSON.parse(localStorage.getItem("CodeStudio")));
  }, []);
  return (
    <div className="bg-stone-50 border pt-3 w-screen 2xl:m-auto h-32 flex justify-around items-center sticky top-0 z-10">
      <div className="xl:">
        <img src="./svg/logo.svg" alt="Code Studio" className="xl:w-9 " />
      </div>
      <Search />
      <Link to="/login" className="flex justify-center items-center gap-3">
        {userData ? (
          <img
            src={userData && userData.profile && userData.profile.image}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <></>
        )}

        <p className="text-black text-[25px] font-normal tracking-[3px]">
          {userData ? userData.username : <>
          <button type="submit" className=" hover:border-orange-600 hover:bg-orange-600 hover:text-white px-5 py-2 rounded-3xl border border-black text-black">Login</button>
          </>}
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
