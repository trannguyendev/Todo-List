import { api } from "../../api/api";
import Cookies from "js-cookie";

export const removeTodoList = async (todoId) => {
  const token = Cookies.get("user_id");
  try {
    const  data  = await api.delete("/todo/deleteTodo", {
      data: { todoId },
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error removing todo:", error);
  }
};
