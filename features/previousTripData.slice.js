import { createSlice } from "@reduxjs/toolkit";

export const previousTripDataSlice = createSlice({
    name: "previousTripData",
    initialState: {
        previousTripData: {
            color: undefined,
            title: undefined,
            type: undefined,
            withWhom: undefined,
            steps: [],
        },
    },
    reducers: {
        patchTripSteps: (state, { payload }) => {
            state.previousTripData = {
                ...state.previousTripData,
                steps: payload,
            };
        },
        pushTripSteps: (state, { payload }) => {
            state.previousTripData = {
                ...state.previousTripData,
                steps: [...state.previousTripData.steps, payload],
            };
        },
        removeStep: (state, { payload }) => {
            const newSteps = [...state.previousTripData.steps];
            newSteps.splice(payload, 1);
            state.previousTripData = {
                ...state.previousTripData,
                steps: newSteps,
            };
        },
        patchState: (state, { payload }) => {
            state.previousTripData = {
                ...state.previousTripData,
                ...payload,
            };
        },
        resetState: (state) => {
            state.previousTripData = {
                color: undefined,
                title: undefined,
                type: undefined,
                withWhom: undefined,
                steps: [],
            };
        },
    },
});

export const {
    patchTripSteps,
    pushTripSteps,
    removeStep,
    patchState,
    resetState,
} = previousTripDataSlice.actions;
export default previousTripDataSlice.reducer;
