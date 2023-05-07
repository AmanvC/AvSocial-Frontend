import axios from "axios";
import { LOCALSTORAGE_TOKEN_KEY } from "./utils/constants";
import { getItemFromLocalStorage } from "./utils/index";

export const makeRequest = () => {
  const token = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

  return axios.create({
    baseURL: "https://avsocial-media-api.onrender.com/api/v1",
    headers: {
      authorization: "Bearer " + token,
    },
  });
};
