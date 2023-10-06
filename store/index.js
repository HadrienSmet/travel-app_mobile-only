import { configureStore } from "@reduxjs/toolkit";
import tipsDataSlice from "../features/tipsData.slice";
import tripDataSlice from "../features/tripData.slice";
import userDataSlice from "../features/userData.slice";

export default configureStore({
    reducer: {
        tipsDataReducer: tipsDataSlice,
        tripDataReducer: tripDataSlice,
        userDataReducer: userDataSlice,
    },
});
