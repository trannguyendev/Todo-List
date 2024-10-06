import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { getUser } from "../../helper/auth/getUser";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const SideBar = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, []);
  console.log(typeof user);
  return (
    <div className="flex flex-col h-full p-3 w-60 bg-slate-700 text-white">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2>Sidebar</h2>
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-white"
            >
              <rect width="352" height="32" x="80" y="96"></rect>
              <rect width="352" height="32" x="80" y="240"></rect>
              <rect width="352" height="32" x="80" y="384"></rect>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm animate-fadeinleft">
              <Link
                rel="noopener noreferrer"
                to="/home-note"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-white"
                >
                  <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                </svg>
                <span className="relative inline cursor-pointer text-lg font-medium before:bg-white  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                  Home
                </span>
              </Link>
            </li>
            <li className="rounded-sm animate-fadeinleft">
              <Link
                rel="noopener noreferrer"
                to="/note-area"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <FontAwesomeIcon
                  icon={faNoteSticky}
                  className="w-5 h-5 text-white"
                />
                <span className="relative inline cursor-pointer text-lg font-medium before:bg-white  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                  Note
                </span>
              </Link>
            </li>
            <li className="rounded-sm animate-fadeinleft">
              <Link
                rel="noopener noreferrer"
                to="/not-found"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                
                <FontAwesomeIcon icon={faGear} className="w-5 h-5 hover:rotate-90 hover:duration-500 hover:ease-in-out"/>
                <span className="relative inline cursor-pointer text-lg font-medium before:bg-white  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                  Settings
                </span>
                </Link>
            </li>
            <li className="rounded-sm animate-fadeinleft">
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-white"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span className="relative inline cursor-pointer text-lg font-medium before:bg-white  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
      <FontAwesomeIcon icon={faUser} className="w-12 h-12"/>
        <div key={user.id}>
          <h2 className="text-lg font-semibold">{user.displayName}</h2>
          <span className="flex items-center space-x-1">
            <p>{user.username}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
