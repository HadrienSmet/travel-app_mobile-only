import axios from "axios";
import { API_URL } from "@env";

export const axiosPatchTrips = async (userId, data, token) => {
    return await axios({
        url: `${API_URL}api/auth/patchTrips/${userId}`,
        method: "patch",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};
