import axios from "axios";

export const API_BASE_URL = "http://localhost:7989/api";

export const api = axios.create({
    baseURL: API_BASE_URL, // Use the defined BASE URL here
});
