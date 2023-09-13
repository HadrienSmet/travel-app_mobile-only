import { createSlice } from "@reduxjs/toolkit";

export const previousTripDataSlice = createSlice({
    name: "previousTripData",
    initialState: {
        previousTripData: {
            steps: [],
            // tips: [],
        },
    },
    reducers: {
        patchTripSteps: (state, { payload }) => {
            state.previousTripData = {
                steps: payload,
                // tips: state.previousTripData.tips,
            };
        },
        // patchTripTips: (state, { payload }) => {
        //     state.previousTripData = {
        //         steps: state.previousTripData.steps,
        //         tips: payload,
        //     };
        // },
        pushTripSteps: (state, { payload }) => {
            state.previousTripData = {
                steps: [...state.previousTripData.steps, payload],
                // tips: state.previousTripData.tips,
            };
        },
        // pushTripTips: (state, { payload }) => {
        //     state.previousTripData = {
        //         steps: state.previousTripData.steps,
        //         tips: [...state.previousTripData.tips, payload],
        //     };
        // },
        removeStep: (state, { payload }) => {
            const newSteps = [...state.previousTripData.steps];
            newSteps.splice(payload, 1);
            state.previousTripData = {
                steps: newSteps,
                // tips: state.previousTripData.tips,
            };
        },
        // removeTip: (state, { payload }) => {
        //     const newTips = [...state.previousTripData.tips];
        //     newTips.splice(payload, 1);
        //     state.previousTripData = {
        //         steps: state.previousTripData.steps,
        //         tips: newTips,
        //     };
        // },
        resetState: (state) => {
            state.previousTripData = {
                steps: [],
                // tips: [],
            };
        },
    },
});

export const {
    patchTripSteps,
    // patchTripTips,
    pushTripSteps,
    // pushTripTips,
    removeStep,
    // removeTip,
    resetState,
} = previousTripDataSlice.actions;
export default previousTripDataSlice.reducer;
