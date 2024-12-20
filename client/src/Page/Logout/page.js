import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page = () => {
  const navigate = useNavigate()
  useEffect(() => {
        localStorage.removeItem("CodeStudio");
      navigate("/")
  }, []);

  return ( 
    <>
      <h1>Logout</h1>
    </>
  );
}

export default Page;
