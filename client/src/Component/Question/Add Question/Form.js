import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "./Form-UI/Image";
import Heading from "./Form-UI/Heading";
import CodeEditor from "./Form-UI/CodeEditor";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Form = ({ showFunction }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  const [detail, setDetails] = useState("");
  const [image, setImage] = useState([]);
  const [errorCode, setErrorCode] = useState("");
  const [form1, setform1] = useState(true);
  const [form2, setform2] = useState(false);
  const [tag, setTag] = useState("");

  const handle = () => {
    document.body.classList.remove("overflow-hidden");
    showFunction(false);
  };

  const handleHeading = (title, tag, questionDetails) => {
    setTitle(title);
    setDetails(questionDetails);
    setTag(tag);
  };

  const handleImage = (image) => {
    setImage(image);
  };

  const handleCode = (error) => {
    setErrorCode(error);
  };
  const handleData = async () => {
    console.log(Date());
    const QuestionData = {
      username: data.username,
      question: {
        id: uuidv4(),
        title: title,
        detail: detail,
        photo: image,
        code: errorCode,
        tag: tag,
        date: Date(),
        codeLanguage: "javascript",
      },
    };
    console.log(QuestionData);

    const res = await axios.post("http://localhost:4000/api/v1/question/add", {
      QuestionData,
    });
    console.log(res);
    if (res) {
      console.log(res);
      navigate(
        `/question/${res.data.result.question.id}/${res.data.result.question.title}`
      );
    }
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    if (localStorage.getItem("CodeStudio")) {
      setData(JSON.parse(localStorage.getItem("CodeStudio")));
    } else {
      navigate("/login");
    }
  }, []);
  const handleForm = () => {
    setform1(!form1);
    setform2(!form2);
  };
  return (
    <div className=" z-20 absolute top-0 left-0 w-full h-screen bg-black bg-opacity-40 flex items-center justify-center ">
      <div
        className=" bg-white rounded-lg w-fit h-fit p-5 overflow-y-scroll"
        style={{ maxHeight: "90vh", marginTop: "5vh", marginBottom: "5vh" }}
      >
        <div className=" flex justify-between">
          <h1 className=" text-2xl font-semibold mt-10 mb-5">Add Question</h1>
        </div>
        <button onClick={handle} className=" absolute top-10 right-10">
          <IoClose className=" text-white text-3xl" />
        </button>

        {form1 && (
          <div className=" flex flex-col">
            <div className=" flex gap-5">
              <Image dataFunction={handleImage} />
              <Heading dataFunction={handleHeading} />
            </div>

            <div className=" flex w-full justify-end">
              <button
                onClick={() => handleForm()}
                className=" bg-orange-600 rounded-lg px-3 h-10 text-white"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {form2 && (
          <div className=" w-[800px] h-fit">
            <p className=" text-base capitalize ml-7 mt-5 font-semibold">
              {" "}
              add your program code
            </p>
            <CodeEditor dataFunction={handleCode} />

            <div className=" flex w-full justify-between mt-10">
            <button
                onClick={() => handleForm()}
                className=" bg-orange-600 rounded-lg px-3 h-10 text-white"
              >
                Prev
              </button>
              <button
                onClick={handleData}
                className=" bg-orange-600 rounded-lg px-3 h-10 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
