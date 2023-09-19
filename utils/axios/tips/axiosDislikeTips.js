import axios from "axios";
import { API_URL } from "@env";

export const axiosDislikeTips = async (tipsId, userId) => {
    return await axios.patch(
        `${API_URL}api/user/${userId}/dislikes/${tipsId}`,
        {
            "Content-Type": "application/json",
        }
    );
};
