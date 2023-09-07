import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        userData: null,
    },
    reducers: {
        setUserData: (state, { payload }) => {
            if (state.userData === null) {
                state.userData = payload;
            } else {
                state.userData = { ...state.userData, ...payload };
            }
        },
        
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
