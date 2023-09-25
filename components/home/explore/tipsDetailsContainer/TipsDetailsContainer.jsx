import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./tipsDetailsContainer.style";
import { COLORS } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
    axiosRemoveLike,
    axiosDislikeTips,
    axiosLikeTips,
    axiosRemoveDislike,
} from "../../../../utils/axios/tips";
import {
    dislikeTips,
    likeTips,
    removeDislike,
    removeLike,
} from "../../../../features/tipsData.slice";

const useVotesButtons = (currentTips) => {
    const [upVotes, setUpVotes] = useState(currentTips.upVotes);
    const [downVotes, setDownVotes] = useState(currentTips.downVotes);
    const dispatch = useDispatch();
    const userId = useSelector(
        (state) => state.userDataReducer.userData
    ).userId;
    const tipsId = currentTips._id;
    const dispatchData = { tipsId, userId };

    const handleRemove = (votes, setVotes) => {
        const currentState = [...votes];
        const likeIndex = currentState.findIndex((el) => el === userId);
        currentState.splice(likeIndex, 1);
        setVotes(currentState);
    };

    const handleLikeButton = () => {
        if (upVotes.includes(userId)) {
            axiosRemoveLike(tipsId, userId)
                .then(() => {
                    handleRemove(upVotes, setUpVotes);
                    dispatch(removeLike(dispatchData));
                })
                .catch(() => alert("Removing like didnt worked"));
        } else {
            axiosLikeTips(tipsId, userId)
                .then(() => {
                    setUpVotes((state) => [...state, userId]);
                    dispatch(likeTips(dispatchData));
                })
                .catch(() => alert("Like didnt worked"));
        }
    };
    const handleDislikeButton = () => {
        if (downVotes.includes(userId)) {
            axiosRemoveDislike(tipsId, userId)
                .then(() => {
                    handleRemove(downVotes, setDownVotes);
                    dispatch(removeDislike(dispatchData));
                })
                .catch(() => alert("Removing like didnt worked"));
        } else {
            axiosDislikeTips(tipsId, userId)
                .then(() => {
                    setDownVotes((state) => [...state, userId]);
                    dispatch(dislikeTips(dispatchData));
                })
                .catch(() => alert("Like didnt worked"));
        }
    };

    return {
        downVotes,
        upVotes,
        handleLikeButton,
        handleDislikeButton,
    };
};

const TipsDetailsContainer = ({ currentTips, handleSelectedTips }) => {
    const { downVotes, upVotes, handleLikeButton, handleDislikeButton } =
        useVotesButtons(currentTips);

    return (
        <View style={styles.detailsContainer}>
            <View style={styles.closeButtonRow}>
                <TouchableOpacity onPress={() => handleSelectedTips(undefined)}>
                    <FontAwesome
                        style={styles.closeButtonElement}
                        name="times"
                    />
                </TouchableOpacity>
            </View>
            <View
                style={
                    currentTips.type === "warning"
                        ? [
                              styles.headerContainer,
                              { backgroundColor: COLORS.warning },
                          ]
                        : [
                              styles.headerContainer,
                              { backgroundColor: COLORS.advice },
                          ]
                }
            >
                <Text style={styles.headerContent}>{currentTips.type}</Text>
                <Text style={styles.headerContent}>-</Text>
                <Text style={styles.headerContent}>{currentTips.about}</Text>
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.mainAuthor}>{currentTips.author}</Text>
                <Text style={styles.mainContent}>{currentTips.content}</Text>
            </View>
            <View style={styles.votesContainer}>
                <TouchableOpacity
                    onPress={handleLikeButton}
                    style={styles.votesView}
                >
                    <Text style={styles.votesValue}>{upVotes.length}</Text>
                    <FontAwesome
                        style={{ color: COLORS.advice }}
                        name="thumbs-o-up"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleDislikeButton}
                    style={styles.votesView}
                >
                    <Text style={styles.votesValue}>{downVotes.length}</Text>
                    <FontAwesome
                        style={{ color: COLORS.warning }}
                        name="thumbs-o-down"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TipsDetailsContainer;
