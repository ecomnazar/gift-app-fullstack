import axios from "axios";

export const BASE_URL = process.env.BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL,
});
