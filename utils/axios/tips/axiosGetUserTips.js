import axios from "axios";
import { API_URL } from "@env";

export const axiosGetUserTips = async (userId) => {
    return await axios.get(`${API_URL}api/users/${userId}/tips`, {
        "Content-Type": "application/json",
    });
};
