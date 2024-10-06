import { api } from "../../api/api";
import Cookies from "js-cookie";
export const updateTodo = async (title, text) => {
  const token = Cookies.get("user_id");
  try {
    const { data } = await api.put(
      "/todo/update",
      {
        title: title,
        text: text,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
