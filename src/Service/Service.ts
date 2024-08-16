import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacia-n0cw.onrender.com/",
});

export const apiPost = async (url: string, data: Object, setData: Function) => {
  const response = await api.post(url, data);
  setData(response.data);
};

export const apiSearchGet = async (url: string, setData: Function) => {
  const response = await api.get(url);
  setData(response.data);
};

export const apiUpdate = async (
  url: string,
  data: Object,
  setData: Function
) => {
  const response = await api.put(url, data);
  setData(response.data);
};

export const apiDelete = async (url: string) => {
  await api.delete(url);
};
