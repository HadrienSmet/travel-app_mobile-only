import axios from "axios";
import { API_URL } from "@env";

export const axiosSignup = async (data) => {
    const url = API_URL;
    console.log(url);
    return await axios.post(`${url}api/auth/signup`, data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};
