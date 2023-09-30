import axios from "axios";
import { API_URL } from "@env";

export const axiosPushTrip = async (id, trip, token) => {
    return await axios({
        url: `${API_URL}api/auth/users/${id}/trip`,
        method: "put",
        data: trip,
        headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
        },
    });
};
