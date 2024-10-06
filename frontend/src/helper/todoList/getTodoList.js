import { api } from "../../api/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const getTodoList = async () => {
  const token = Cookies.get("user_id");
  try {
    const todo = await api.get("/todo/getTodo", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (todo.status === 200 || todo.data.status === "success") {
      toast.success("Lấy dữ liệu ghi chú thành công");
      return todo.data.message;
    }
  } catch (error) {
    const todo = error.response.data;
    toast.error(todo.message);
  }
};
