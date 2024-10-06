import React, { useState } from "react";

import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import SideBar from "./sideBar";
import TomorrowWidget from "./widget/weather";
import GoogleCalendarEmbed from "./widget/Calendar";

const UserNote = () => {
  const [type, setType] = useState(true);
  function hiddenElement() {
    let a = document.getElementById("guide");
    a.style = "display: none";
  }
  const inputRef = useRef();
  function autoFocus() {
    inputRef.current.focus();
    setType((type) => !type);
    hiddenElement();
  }
  return (
    <div className="w-screen h-screen bg-slate-800 font-sans">
      <SideBar />
      <div className="absolute top-[10%] ml-[20%]">
        <TomorrowWidget/>
      </div>
      <div className="absolute top-[10%] ml-[40%]">
        <GoogleCalendarEmbed/>
      </div>
    </div>
  );
};
export default UserNote;
