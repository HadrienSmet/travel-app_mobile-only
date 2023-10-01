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
                everyTips: [...payload],
            };
        },
        likeTips(state, { payload }) {
            const tipsList = [...state.tipsData.everyTips];
            const rightTipsIndex = tipsList.findIndex(
                (el) => el._id === payload.tipsId
            );
            const newTip = { ...tipsList[rightTipsIndex] };
            newTip.upVotes.push(payload._id);
            tipsList.splice(rightTipsIndex, 1, newTip);
        },
        dislikeTips(state, { payload }) {
            const tipsList = [...state.tipsData.everyTips];
            const rightTipsIndex = tipsList.findIndex(
                (el) => el._id === payload.tipsId
            );
            const newTip = { ...tipsList[rightTipsIndex] };
            newTip.downVotes.push(payload._id);
            tipsList.splice(rightTipsIndex, 1, newTip);
        },
        removeLike(state, { payload }) {
            const tipsList = [...state.tipsData.everyTips];
            const rightTipsIndex = tipsList.findIndex(
                (el) => el._id === payload.tipsId
            );
            const newTip = { ...tipsList[rightTipsIndex] };
            const voteIndex = newTip.upVotes.findIndex(
                (el) => el === payload._id
            );
            newTip.upVotes.splice(voteIndex, 1);
            tipsList.splice(rightTipsIndex, 1, newTip);
        },
        removeDislike(state, { payload }) {
            const tipsList = [...state.tipsData.everyTips];
            const rightTipsIndex = tipsList.findIndex(
                (el) => el._id === payload.tipsId
            );
            const newTip = { ...tipsList[rightTipsIndex] };
            const voteIndex = newTip.downVotes.findIndex(
                (el) => el === payload._id
            );
            newTip.upVotes.splice(voteIndex, 1);
            tipsList.splice(rightTipsIndex, 1, newTip);
        },
    },
});

export const {
    pushInUserTips,
    pushInEveryTips,
    setEveryTips,
    setUserTips,
    likeTips,
    dislikeTips,
    removeLike,
    removeDislike,
} = tipsDataSlice.actions;
export default tipsDataSlice.reducer;
