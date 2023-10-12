import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        userData: null,
    },
    reducers: {
        putPreviousTrip: (state, { payload }) => {
            const data = [...state.userData.previousTrips];
            const tripIndex = data.findIndex(
                (trip) => trip._id === payload._id
            );
            data.splice(tripIndex, 1, payload);
            state.userData.previousTrips = data;
        },
        setUserData: (state, { payload }) => {
            if (state.userData === null) {
                state.userData = payload;
            } else {
                state.userData = { ...state.userData, ...payload };
            }
        },
        setUserCoordinates: (state, { payload }) => {
            state.userData.coordinates = { ...payload };
        },
        setUserPreviousTrips: (state, { payload }) => {
            state.userData.previousTrips = payload;
        },
        removeUserTrip: (state, { payload }) => {
            const data = [...state.userData.previousTrips];
            const tripIndex = data.findIndex((trip) => trip.title === payload);
            data.splice(tripIndex, 1);
            state.userData.previousTrips = data;
        },
    },
});

export const {
    putPreviousTrip,
    setUserData,
    setUserCoordinates,
    setUserPreviousTrips,
    removeUserTrip,
} = userDataSlice.actions;
export default userDataSlice.reducer;
