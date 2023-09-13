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
        pushUserTips(state, { payload }) {
            state.tipsData = {
                ...state.tipsData,
                userTips: [...state.tipsData.userTips, ...payload],
            };
        },
        setUserTips(state, { payload }) {
            state.tipsData = {
                ...state.tipsData,
                userTips: [...payload],
            };
        },
        setEveryTips(state, { payload }) {
            state.tipsData = {
                ...state.tipsData,
                everyTips: [...payload],
            };
        },
    },
});

export const { pushUserTips, setEveryTips, setUserTips } =
    tipsDataSlice.actions;
export default tipsDataSlice.reducer;
