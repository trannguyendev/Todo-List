import React, { useState } from "react";
import { createTodo } from "../../../helper/todoList/createTodoList";
function Modal({ closeModal, setTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSave = () =>{
    createTodo(title, description)
    closeModal(false);
  }
  return (
    <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-home-img text-gray-800">
      <input className="flex items-center gap-2 font-semibold leading-tight tracking-wide focus:outline-none rounded-lg text-2xl focus:ring-1 focus:ring-cyan-300 pl-2"
        placeholder="Type your title here..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <textarea cols="30" rows="10" className="flex-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 rounded-lg pl-2 pt-1" placeholder="Type your note here..." value={description} onChange={(e)=>setDescription(e.target.value)}>
      </textarea>
      <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
        <button className="px-6 py-2 rounded-sm text-white hover:border-2 hover:ease-in-out hover:duration-150 hover:border-white hover:rounded-lg" onClick={() => { closeModal(false) }}>Cancel</button>
        <button className="px-6 py-2 rounded-sm shadow-sm bg-violet-600 text-gray-50" onClick={handleSave}>
          Save changes
        </button>
      </div>
    </div>
  );
};
export default Modal;
