import axios from "axios";
import { API_URL } from "@env";

export const axiosPostTips = async (tips) => {
    return await axios.post(`${API_URL}api/tips`, tips, {
        "Content-Type": "application/json",
    });
};
