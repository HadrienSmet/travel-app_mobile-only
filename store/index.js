import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../features/userData.slice";

export default configureStore({
    reducer: {
        newUserData: userDataSlice,
    },
});
