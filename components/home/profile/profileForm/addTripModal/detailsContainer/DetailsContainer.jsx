import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../../../../../../constants";
import styles from "./detailsContainer.style";

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
