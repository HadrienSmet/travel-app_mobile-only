import axios from "axios";
import { API_URL } from "@env";

export const axiosPatchUser = async (userId, data, token) => {
    return await axios({
        url: `${API_URL}api/auth/users/${userId}`,
        method: "patch",
        data: data,
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};
