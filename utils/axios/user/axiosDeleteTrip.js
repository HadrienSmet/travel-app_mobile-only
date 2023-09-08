import axios from "axios";
import { API_URL } from "@env";

export const axiosDeleteTrip = async (userId, tripTitle, token) => {
    return await axios({
        url: `${API_URL}api/auth/users/${userId}/previousTrips/${tripTitle}`,
        method: "delete",
        headers: {
            "Content-Type": "multipart/form-data",
            authorization: `bearer ${token}`,
        },
    });
};
