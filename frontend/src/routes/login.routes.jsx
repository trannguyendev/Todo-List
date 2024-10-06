import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/auth/login";
// import NotFound from "../page/notFound/notfound";
import SignUp from "../page/auth/signUp";
import Notfound2 from "../page/notFound/notfound2";
import HomePage from "../page/home/homePage";

const AuthRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/todoList" element={<HomePage />} />
        <Route path="*" element={<Notfound2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AuthRoute;
