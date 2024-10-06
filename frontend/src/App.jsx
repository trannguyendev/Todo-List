
import LoginForm from "./page/auth/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./page/auth/register";
import HomePage from "./page/home/homePage";
import UserNote from "./page/home/userNote";
import NoteArea from "./page/home/NoteArea/noteArea";
import SettingPage from "./page/home/SettingPage/setting";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home-note" element={<UserNote />} />
        <Route path="/note-area" element={<NoteArea/>}/>
        <Route path="/settings" element={<SettingPage/>}/>
      </Routes>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>
    </BrowserRouter>
  );
}

export default App;
