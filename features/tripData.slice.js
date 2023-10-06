import { createSlice } from "@reduxjs/toolkit";

export const tripDataSlice = createSlice({
    name: "tripData",
    initialState: {
        tripData: {
            color: undefined,
            title: undefined,
            type: undefined,
            withWhom: undefined,
            steps: [],
        },
    },
    reducers: {
        patchSteps: (state, { payload }) => {
            state.tripData = {
                ...state.tripData,
                steps: payload,
            };
        },
        pushStep: (state, { payload }) => {
            state.tripData = {
                ...state.tripData,
                steps: [...state.tripData.steps, payload],
            };
        },
        removeStep: (state, { payload }) => {
            const newSteps = [...state.tripData.steps];
            newSteps.splice(payload, 1);
            state.tripData = {
                ...state.tripData,
                steps: newSteps,
            };
        },
        patchTrip: (state, { payload }) => {
            state.tripData = {
                ...state.tripData,
                ...payload,
            };
        },
        resetTrip: (state) => {
            state.tripData = {
                color: undefined,
                title: undefined,
                type: undefined,
                withWhom: undefined,
                steps: [],
            };
        },
    },
});

export const { patchSteps, pushStep, removeStep, patchTrip, resetTrip } =
    tripDataSlice.actions;
export default tripDataSlice.reducer;
