import { createSlice } from "@reduxjs/toolkit";

export const tipsDataSlice = createSlice({
    name: "tipsData",
    initialState: {
        tipsData: {
            userTips: [],
            everyTips: [],
        },
    },
    reducers: {
        pushInUserTips(state, { payload }) {
            state.tipsData = {
                everyTips: state.tipsData.everyTips,
                userTips: [...state.tipsData.userTips, payload],
            };
        },
        pushInEveryTips(state, { payload }) {
            state.tipsData = {
                userTips: state.tipsData.userTips,
                everyTips: [...state.tipsData.userTips, payload],
            };
        },
        setUserTips(state, { payload }) {
            state.tipsData = {
                everyTips: state.tipsData.everyTips,
                userTips: payload,
            };
        },
        setEveryTips(state, { payload }) {
            state.tipsData = {
                userTips: state.tipsData.userTips,
                everyTips: payload,
            };
        },
    },
});

export const { pushInUserTips, pushInEveryTips, setEveryTips, setUserTips } =
    tipsDataSlice.actions;
export default tipsDataSlice.reducer;
