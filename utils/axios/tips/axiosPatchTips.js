import axios from "axios";
import { API_URL } from "@env";

export const axiosPatchTips = async (tips, userId) => {
    return await axios.get(
        `${API_URL}api/users/${userId}/tips/${tips._id}`,
        tips,
        {
            "Content-Type": "application/json",
        }
    );
};
