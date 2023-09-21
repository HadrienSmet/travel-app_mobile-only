import axios from "axios";
import { API_URL } from "@env";

export const axiosGetEveryTips = async (limit, about) => {
    let queryParams = "";
    if (limit || about) {
        const limitParam = `limit=${limit}`;
        const aboutParam = about ? `&about=${about}` : "";
        queryParams = `?${limitParam}${aboutParam}`;
    }
    return await axios.get(`${API_URL}api/tips${queryParams}`, {
        "Content-Type": "application/json",
    });
};
