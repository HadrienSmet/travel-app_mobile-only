import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../features/userData.slice";
import previousTripDataSlice from "../features/previousTripData.slice";

export default configureStore({
    reducer: {
        newUserData: userDataSlice,
        previousTripReducer: previousTripDataSlice,
    },
});
