import axios from "axios";
import { API_URL } from "@env";

export const axiosRemoveDislike = async (tipsId, userId) => {
    return await axios.patch(
        `${API_URL}api/user/${userId}/removeDislike/${tipsId}`,
        {
            "Content-Type": "application/json",
        }
    );
};
