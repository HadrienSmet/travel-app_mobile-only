import axios from "axios";
import { API_URL } from "@env";

export const axiosGetEveryTips = async (limit, mapScope, about) => {
    console.log("within the axios function:");
    console.log(about);
    const defaultParam = `limit=${limit}&latitude=${mapScope.latitude}&longitude=${mapScope.longitude}&latitudeDelta=${mapScope.latitudeDelta}&longitudeDelta=${mapScope.longitudeDelta}`;
    const aboutParam = about ? `&aboutParam=${about}` : "";
    let queryParams = `?${defaultParam}${aboutParam}`;
    console.log(queryParams);

    return await axios.get(`${API_URL}api/tips${queryParams}`, {
        "Content-Type": "application/json",
    });
};
