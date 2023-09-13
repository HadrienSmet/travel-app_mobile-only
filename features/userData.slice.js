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
        // setUserTripTips: (state, { payload }) => {
        //     const previousTrips = [...state.userData.previousTrips];
        //     for (let i = 0; i < payload.length; i++) {
        //         if (payload[i].madeDuring !== undefined) {
        //             const tripIndex = previousTrips.findIndex((trip) => trip.title === payload[i].madeDuring)
        //             let tipsData = previousTrips[tripIndex].tips === undefined ?
        //                 [...payload[i]] :
        //                 [...previousTrips[tripIndex].tips, ...payload[i]];
        //             const data = {
        //                 ...previousTrips[tripIndex],
        //                 tips: tipsData
        //             }
        //             previousTrips.splice(tripIndex, 1, data)
        //         }

        //     }
        // },
        removeUserTrip: (state, { payload }) => {
            const data = [...state.userData.previousTrips];
            const tripIndex = data.findIndex((trip) => trip.title === payload);
            data.splice(tripIndex, 1);
            state.userData.previousTrips = data;
        },
    },
});

export const { setUserData, setUserPreviousTrips, removeUserTrip } =
    userDataSlice.actions;
export default userDataSlice.reducer;
