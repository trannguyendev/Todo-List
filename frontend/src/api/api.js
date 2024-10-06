import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/v1/api/",
  headers: { "X-Custom-Header": "foobar" , "Content-Type": "application/json"},
  withCredentials: true,
});
