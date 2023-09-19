import axios from "axios";
import { API_URL } from "@env";

export const axiosGetEveryTips = async () => {
    return await axios.get(`${API_URL}api/tips`, {
        "Content-Type": "application/json",
    });
};
