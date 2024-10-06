import { toast } from "react-toastify";
import { api } from "../../api/api";
import Cookies from "js-cookie";
export const createTodo = async (title, text) => {
  const userId = Cookies.get("user_id");
  try {
    const todo = await api.post(
      "/todo/create",
      {
        title: title,
        text: text,
      },
      
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      }
    );
    if (todo.data.status === "success" || todo.status === 200) {
      toast.success(todo.data.message);
    }
  } catch (err) {
    console.log(err);
  }
};
