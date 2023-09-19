import axios from "axios";
import { API_URL } from "@env";

export const axiosRemoveLike = async (tipsId, userId) => {
    return await axios.patch(
        `${API_URL}api/user/${userId}/removeLike/${tipsId}`,
        {
            "Content-Type": "application/json",
        }
    );
};
