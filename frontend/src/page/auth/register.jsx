import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupHandle } from "../../helper/auth/signup";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const [rePass, setRepass] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigateReg = useNavigate();
  function handleClick() {
    let a = document.getElementById("pass");
    setShow((show) => !show);
    show ? (a.type = "password") : (a.type = "text");
  }

  return (
    <div className="bg-signup-img w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-black border-2 border-solid backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-white drop-shadow-xl">
            Register
          </h1>
          <p className="text-sm text-white animate-typing overflow-hidden">Join us and note your things</p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="username"
                name="username" 
                id="username" 
                placeholder="Enter your username" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
            </div>
            <div>
              <label htmlFor="displayname">Display name</label>
              <input
                type="displayname"
                name="displayname" 
                id="displayname" 
                placeholder="Enter your display name" 
                value={displayName}
                onChange={(e)=>setDisplayName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <span className="text-xs text-white">
                  Show password
                  <input
                    type="checkbox"
                    name="pass"
                    id="checkbox"
                    onClick={handleClick}
                    className="m-2"
                  />
                </span>
              </div>
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Enter your password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="rePass">Re-enter your password</label>
              <input 
              type="rePass"
              id="rePass"
              name="rePass" 
              placeholder="Re-enter your password"
              value={rePass}
              onChange={(e)=>setRepass(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"/>
            </div>
          </div>
          <div className="space-y-2">
            <div className="px-[25%]">
              <button onClick={(e) => signupHandle(displayName, username, pass, rePass, email, navigateReg, e)} className="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-lg">
                <span className="relative z-10">Register</span>
              </button>
            </div>
            <p className="px-6 text-sm text-center text-white">
              Already have an account yet?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="relative text-black text-bold hover:text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]  px-2"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
