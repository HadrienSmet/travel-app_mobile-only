import axios from "axios";
import { API_URL } from "@env";

export const axiosPatchUser = async (userId, data, token) => {
    return await axios({
        url: `${API_URL}api/auth/patchProfile/${userId}`,
        method: "patch",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};
