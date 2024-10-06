import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginHandle } from "../../helper/auth/login";
import {useNavigate} from 'react-router-dom'
const LoginForm = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleClick() {
    let a = document.getElementById("pass");
    setShow((show) => !show);
    show ? (a.type = "password") : (a.type = "text");
  }

  return (
    <div className="bg-login-img w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-black border-2 border-solid backdrop-blur-sm">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-white drop-shadow-xl">
            Login
          </h1>
          <p className="text-sm text-white">Login to access your account</p>
        </div>
        <form noValidate="" action="" className="space-y-12" >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <span className="text-xs dark:text-gray-600">
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
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="px-12">
              <button 
              onClick={(e)=>loginHandle(email,password,navigate,e)}
              className="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-lg">
                <span className="relative z-10">Login</span>
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link
                rel="noopener noreferrer"
                to="/signup"
                className="relative text-black hover:text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;