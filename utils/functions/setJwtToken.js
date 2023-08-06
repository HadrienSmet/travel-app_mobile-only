export const setJwtToken = (data) => {
    localStorage.setItem("jwtToken", JSON.stringify(data));
};
