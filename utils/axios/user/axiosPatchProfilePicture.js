import axios from "axios";
import { API_URL } from "@env";

export const axiosPatchProfilePicture = async (userId, picture, token) => {
    return await axios({
        url: `${API_URL}api/auth/users/${userId}/setProfilePicture`,
        data: picture,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};
