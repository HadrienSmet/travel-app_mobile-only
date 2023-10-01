import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./detailsContainer.style";
import { useSelector } from "react-redux";
import { timestampToDate } from "../../../../../../utils/functions/timestampToDate";

const useDetailsContainer = () => {
    const [areDetailsVisible, setDetailsVisible] = useState(false);

    const toggleDetails = () => setDetailsVisible((state) => !state);

    return {
        areDetailsVisible,
        toggleDetails,
    };
};

const DetailsContainer = ({
    isPopupVisible,
    title,
    type,
    withWhom,
    handleConfirm,
}) => {
    const { areDetailsVisible, toggleDetails } = useDetailsContainer();
    const tripData = useSelector(
        (state) => state.previousTripReducer.previousTripData
    );

    return (
        <>
            {!isPopupVisible && (
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsHeader}>
                        <Text style={styles.detailsHeaderElem}>{title}</Text>
                        <TouchableOpacity onPress={toggleDetails}>
                            <FontAwesome
                                style={
                                    areDetailsVisible
                                        ? [
                                              styles.detailsHeaderElem,
                                              {
                                                  transform: [
                                                      { rotate: "180deg" },
                                                  ],
                                              },
                                          ]
                                        : styles.detailsHeaderElem
                                }
                                name="angle-up"
                            />
                        </TouchableOpacity>
                    </View>
                    {areDetailsVisible && (
                        <View style={styles.detailsContent}>
                            <View style={styles.detailsRow}>
                                <Text>{type}</Text>
                                <Text>{withWhom}</Text>
                            </View>
                            {tripData.steps.length !== 0 && (
                                <View style={styles.stepsContainer}>
                                    {tripData.steps.map((step, index) => (
                                        <View
                                            style={styles.stepContainer}
                                            key={`step-${index}`}
                                        >
                                            <View style={styles.setpHeader}>
                                                <Text style={styles.stepType}>
                                                    {step.type}
                                                </Text>
                                                <Text>
                                                    {timestampToDate(step.date)}
                                                </Text>
                                            </View>
                                            <Text style={styles.stepContent}>
                                                {step.content}
                                            </Text>
                                            <View
                                                style={styles.borderBottom}
                                            ></View>
                                        </View>
                                    ))}
                                </View>
                            )}
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={handleConfirm}
                            >
                                <Text style={styles.buttonContent}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </>
    );
};

export default DetailsContainer;
