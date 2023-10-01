import { createSlice } from "@reduxjs/toolkit";

export const previousTripDataSlice = createSlice({
    name: "previousTripData",
    initialState: {
        previousTripData: {
            steps: [],
        },
    },
    reducers: {
        patchTripSteps: (state, { payload }) => {
            state.previousTripData = {
                steps: payload,
            };
        },
        pushTripSteps: (state, { payload }) => {
            state.previousTripData = {
                steps: [...state.previousTripData.steps, payload],
            };
        },
        removeStep: (state, { payload }) => {
            const newSteps = [...state.previousTripData.steps];
            newSteps.splice(payload, 1);
            state.previousTripData = {
                steps: newSteps,
            };
        },
        resetState: (state) => {
            state.previousTripData = {
                steps: [],
            };
        },
    },
});

export const { patchTripSteps, pushTripSteps, removeStep, resetState } =
    previousTripDataSlice.actions;
export default previousTripDataSlice.reducer;
