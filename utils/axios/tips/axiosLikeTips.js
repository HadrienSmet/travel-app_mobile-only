import axios from "axios";
import { API_URL } from "@env";

export const axiosLikeTips = async (tipsId, userId) => {
    return await axios.patch(`${API_URL}api/user/${userId}/likes/${tipsId}`, {
        "Content-Type": "application/json",
    });
};
