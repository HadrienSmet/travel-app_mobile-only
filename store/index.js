import { configureStore } from "@reduxjs/toolkit";
import signupDataSlice from "../features/signupData.slice";

export default configureStore({
    reducer: {
        newSignupData: signupDataSlice,
    },
});
