import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../features/userData.slice";
import previousTripDataSlice from "../features/previousTripData.slice";
import tipsDataSlice from "../features/tipsData.slice";

export default configureStore({
    reducer: {
        newUserData: userDataSlice,
        previousTripReducer: previousTripDataSlice,
        tipsReducer: tipsDataSlice,
    },
});
