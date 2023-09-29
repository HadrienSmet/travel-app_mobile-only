import axios from "axios";
import { API_URL } from "@env";

export const axiosGetEveryTips = async (limit, mapScope, about) => {
    const defaultParam = `limit=${limit}&latitude=${mapScope.latitude}&longitude=${mapScope.longitude}&latitudeDelta=${mapScope.latitudeDelta}&longitudeDelta=${mapScope.longitudeDelta}`;
    const aboutParam = about ? `&about=${about}` : "";
    let queryParams = `?${defaultParam}${aboutParam}`;

    return await axios.get(`${API_URL}api/tips${queryParams}`, {
        "Content-Type": "application/json",
    });
};
