import axios from "axios";
import { API_URL } from "@env";

export const axiosPutCoverPicture = async (userId, data, token) => {
    const url = API_URL;
    return await axios({
        url: `${url}api/auth/setCoverPicture/${userId}`,
        method: "put",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};
