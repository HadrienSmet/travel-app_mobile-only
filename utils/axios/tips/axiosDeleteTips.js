import axios from "axios";
import { API_URL } from "@env";

export const axiosDeleteTips = async (userId, tipsId) => {
    return await axios.get(`${API_URL}api/users/${userId}/tips/${tipsId}`, {
        "Content-Type": "application/json",
    });
};
