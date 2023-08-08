import axios from "axios";
import { API_URL } from "@env";

export const axiosCheckMail = async (email) => {
    return await axios.get(`${API_URL}api/auth/checkMail/${email}`, {
        "Content-Type": "application/json",
    });
};
