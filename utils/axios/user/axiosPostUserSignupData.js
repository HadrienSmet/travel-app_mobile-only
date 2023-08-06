import axios from "axios";

export const axiosPostUserSignupData = async (data) => {
    const url = process.env.VITE_REACT_APP_API_URL;
    return await axios.post(`${url}api/auth/signup`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
