import { api } from "../../api/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const getUser = async () => {
  const token = Cookies.get("user_id");
  try {
    const user = await api.get("/getUser", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (user.status === 200 || user.data.status === "success") {
      toast.success("Lấy dữ liệu ghi chú thành công");
      return user.data.message;
    }
  } catch (error) {
    const user = error.response.data;
    toast.error(user.message);
  }
};
