import { useLocation } from "react-router-dom";
import Login from "../../Component/Auth/Login/Login";
import Sign from "../../Component/Auth/Sign/Sign";
import AuthBackground from "../../Component/UI/AuthBackground";

const Page = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between w-full h-screen overflow-hidden bg-stone-50 relative">
     <img src="./svg/logo.svg" alt="Code Studio" className="xl:w-9 absolute left-8 top-6 " />
      <AuthBackground />
      {location.pathname === "/login" && <Login />}
      {location.pathname === "/register" && <Sign />}
    </div>
  );
};

export default Page;
