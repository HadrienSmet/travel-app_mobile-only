import * as SecureStore from "expo-secure-store";

export const saveJwtToken = async (data) => {
    SecureStore.setItemAsync("jwtToken", JSON.stringify(data));
};
