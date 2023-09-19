import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./tipsDetailsContainer.style";
import { COLORS } from "../../../../constants";

const TipsDetailsContainer = ({ currentTips, handleSelectedTips }) => {
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
                <View style={styles.votesView}>
                    <Text style={styles.votesValue}>
                        {currentTips.upVotes.length}
                    </Text>
                    <TouchableOpacity>
                        <FontAwesome
                            style={{ color: COLORS.advice }}
                            name="thumbs-o-up"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.votesView}>
                    <Text style={styles.votesValue}>
                        {currentTips.downVotes.length}
                    </Text>
                    <TouchableOpacity>
                        <FontAwesome
                            style={{ color: COLORS.warning }}
                            name="thumbs-o-down"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TipsDetailsContainer;
