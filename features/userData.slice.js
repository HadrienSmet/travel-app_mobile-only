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
        setUserPreviousTrips: (state, { payload }) => {
            state.userData.previousTrips = payload;
        },
    },
});

export const { setUserData, setUserPreviousTrips } = userDataSlice.actions;
export default userDataSlice.reducer;
