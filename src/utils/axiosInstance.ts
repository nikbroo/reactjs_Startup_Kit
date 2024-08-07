import axios from "axios";
import { base_URL } from "./baseURL";
import localStorage from "redux-persist/es/storage";

const fetchToken = async () => {
  const localData = await localStorage.getItem("persist:root");
  if (localData) {
    try {
      const data = JSON.parse(localData);

      if (data?.user) {
        const user = JSON.parse(data?.user);
        // console.log("---------localData>", user);
        setAuthToken(user?.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
fetchToken();

export const instance = axios.create({
  baseURL: base_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const uploadInstance = axios.create({
  baseURL: base_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer randomToken`,
  },
});

export const randomTokenInstance = axios.create({
  baseURL: base_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer randomToken`,
  },
});

export const setAuthToken = (token: string) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
