import axios from "axios";
import { API_URL } from "@env";

export const axiosSignIn = async (data) => {
    return await axios.post(`${API_URL}api/auth/login`, data, {
        "Content-Type": "application/json",
    });
};
