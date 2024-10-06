import { toast } from "react-toastify";
import { api } from "../../api/api";

export const signupHandle = async (
  displayName,
  username,
  password,
  rePass,
  email,
  navigate,
  e
) => {
  e.preventDefault();
  try {
    const data = await api.post("/signup", {
      displayName: displayName,
      username: username,
      password: password,
      rePassword: rePass,
      email: email,
    });

    const user = data.data;
    if (user.status == "success") {
      toast.success(user.message, {
        onClose: () => navigate("/login"),
      });
    }
  } catch {
    console.log("failed");
  }
};
