import { api } from "../../api/api";
import { toast } from "react-toastify";
export const loginHandle = async (email, password, navigate, e) => {
  e.preventDefault();

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailReg.test(email)) {
    return toast.error("Email không đúng định dạng");
  }
  if (password.length < 6) {
    return toast.error("Mật khẩu phải có ít nhất 6 ký tự");
  }
  try {
    const response = await api.post("/login", {
      username: email,
      password: password,
    });

    if (response.data.status === "success") {
      toast.success(response.data.message, {
        onClose: () => navigate("/home-note"),
      });
    }
    console.log(response);
    
  } catch (err) {
    const error = err.response.data;
    if (error.status === "error") {
      toast.error(error.message);
    }
    console.log(error);
  }

  
};
