import React from 'react'
import HomePage from "./Page/Home/Page";
import AuthPage from "./Page/Auth/Page"
import SingleQuestionPage from "./Page/Single-Question/Page"
import QuestionPage from "./Page/Question/Page"
import ProfilePage from "./Page/Profile/Page"
import UserProfile from "./Page/UserProfile/Page"
import LogoutPage from "./Page/Logout/page"
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ChatPage from './Page/Chat/Page';
const App = () => {
  

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<AuthPage/>}></Route>
      <Route path="/register" element={<AuthPage/>}></Route>
      <Route path="/question" element={<QuestionPage/>}></Route>
      <Route path="/chat" element={<ChatPage/>}></Route>
      <Route path="/profile" element={<ProfilePage/>}></Route>
      <Route path="/user/:username" element={<UserProfile/>}></Route>
      <Route path="/logout" element={<LogoutPage/>}></Route>

      <Route path="/question/:questionId/:questionHeading" element={<SingleQuestionPage/>} />
      <Route path="/question/:tag" element={<QuestionPage/>} />
    </Routes>
    </>
  )
}

export default App