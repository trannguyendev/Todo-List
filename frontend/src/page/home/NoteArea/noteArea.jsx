import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../sideBar";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";
import { useEffect } from "react";
import {getTodoList} from "../../../helper/todoList/getTodoList"
import { removeTodoList } from "../../../helper/todoList/removeTodoList";
const NoteArea = () => {
  const [modal, setModal] = useState(false);
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodoList();
        setTodo(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-screen bg-slate-800">
      <div className="w-[15%]">
        <SideBar />
      </div>
      <div className="flex top-2 absolute ml-[40%]">
        <form action="">
          <input
            type="search"
            name="search"
            id="s-note"
            placeholder="Find your note here "
            className="h-12 pl-2 rounded-lg outline-none bg-slate-400 placeholder-white focus:placeholder-slate-400 focus:bg-white"
          />
        </form>
      </div>
      <div className="flex absolute top-[20%] justify-center left-[40%] z-20">
        {modal && <Modal closeModal={setModal} setTodo={setTodo}/>}
      </div>
      <div className="absolute top-[15%] left-[20%] z-10 grid grid-cols-4 grid-flow-row gap-4 mx-3">
        {todo &&todo.map((item)=>{
          return(
            <div key={item.key} className="border-2 border-white rounded-lg p-2 max-h-6">
              <div>
                <h3 className="text-green-500 text-xl font-bold">{item.title.substring(0,10)+"...."}</h3>
                <p className="text-slate-500 break-words">{item.text.substring(0,20)+"...."}</p>
              </div>
              <span className="flex">
                <div className="hover:duration-300 hover:animate-bounce">
                <button className="hover:text-white hover:ease-in-out hover:duration-150 text-2xl text-green-400" onClick={()=>removeTodoList(item.key)}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </span>
            </div>
          )
        })}
      </div>
      <button onClick={() =>{setModal(true);setTimeout(1000)}}>
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white border-2 border-gray-700 rounded-full w-16 bottom-4 right-4 absolute text-5xl hover:text-gray-700 hover:bg-white"
        />
      </button>
    </div>
  );
};
export default NoteArea;
