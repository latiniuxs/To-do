import React from "react";
import { useEffect, useState } from "react";
import desktopDark from "../assets/bg-desktop-dark.jpg";
import desktopLight from "../assets/bg-desktop-light.jpg";
import mobileDark from "../assets/bg-mobile-dark.jpg";
import mobileLight from "../assets/bg-mobile-light.jpg";
import Sun from "../assets/icon-sun.svg";
import moon from '../assets/icon-moon.svg'
import Form from "./Form";
import Footer from "./Footer";
import Todoitem from './TodoItem'
const Underlay = () => {
  var srcst1 = desktopDark + " 1024w, " + mobileDark + " 375w";
  var srcst2 = desktopLight + " 1024w, " + mobileLight + ' 375w'
  var size = "(min-width: 1024px) 1024px, 375px";

  const [lightMode, setLightMode] = useState(false)

  const handleMode = ()=> {
    setLightMode(!lightMode)
  }

  const [task, setTask] = useState([])

  useEffect(() => {
    let taskData = window.localStorage.getItem("taskData");
    if (taskData) {
      setTask(JSON.parse(taskData));
    } else {
      setTask([
        
            {
              id: 1,
              title: "Jog around the park 3x",
              completed: false
            },
            {
              id: 2,
              title: "10 minutes Meditation",
              completed: true
            },
            {
              id: 3,
              title: "Read for 1 hour",
              completed: false
            },
            {
              id: 4,
              title: "Pick up groceries",
              completed: true
            },
            {
              id: 5,
              title: 'Complete Todo App on Frontend Mentor',
              completed: false
            }
        
        
      ]);
    }
  }, []);

  useEffect(() => {
    if (task.length > 0)
      window.localStorage.setItem("taskData", JSON.stringify(task));
  }, [task]);



  return (
    <div className={lightMode? "h-screen text-white bg-white" : "h-screen text-white bg-gray-900"}>
      <div className="h-[30%]">
        <img
          className="w-full h-full object-cover"
          src={lightMode? desktopLight : desktopDark}
          alt="Fine background"
          sizes={size}
          srcSet={lightMode ? srcst2 : srcst1}
        />
      </div>
      <div className=" h-[70%] absolute w-full bottom-0">
        <div className="w-[90%] max-w-[500px] mx-auto relative top-[-10rem] flex flex-col justify-center items-center">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-4xl font-extrabold whitespace-nowrap">
              T O D O
            </h1>
            <img src={lightMode ? moon : Sun } alt="sun" className="object-contain h-8 ml-2 cursor-pointer"
            onClick={handleMode}
            />
          </div>
          <div className="items-center w-full justify-between"
          >
            <Form lightMode={lightMode} setTask={setTask} task={task}/>
            <div className={lightMode ? "bg-white" : "bg-gray-800"} >
            {task.map((x,index) => {
              console.log(x)
              return(
                <Todoitem taskName={x.title} key={x.title} lightMode={lightMode} completed={x.completed}/> 
              )
            })}
            <Footer lightMode={lightMode}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Underlay;
