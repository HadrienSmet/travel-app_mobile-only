import { createSlice } from "@reduxjs/toolkit";

export const previousTripDataSlice = createSlice({
    name: "previousTripData",
    initialState: {
        previousTripData: {
            steps: [],
            tips: [],
        },
    },
    reducers: {
        patchTripSteps: (state, { payload }) => {
            state.previousTripData = {
                steps: payload,
                tips: state.previousTripData.tips,
            };
        },
        patchTripTips: (state, { payload }) => {
            state.previousTripData = {
                steps: state.previousTripData.steps,
                tips: payload,
            };
        },
        pushTripSteps: (state, { payload }) => {
            state.previousTripData = {
                steps: [...state.previousTripData.steps, payload],
                tips: state.previousTripData.tips,
            };
        },
        pushTripTips: (state, { payload }) => {
            state.previousTripData = {
                steps: state.previousTripData.steps,
                tips: [...state.previousTripData.tips, payload],
            };
        },
    },
});

export const { patchTripSteps, patchTripTips, pushTripSteps, pushTripTips } =
    previousTripDataSlice.actions;
export default previousTripDataSlice.reducer;
