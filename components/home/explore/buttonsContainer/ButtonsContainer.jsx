import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity, View } from "react-native";
import styles from "./buttonsContainer.style";

const ButtonsContainer = ({ handlePinState }) => {
    const [isAddingTips, setIsAddingTips] = useState(false);

    const toggleAddTips = () => setIsAddingTips((state) => !state);

    return (
        <View style={styles.buttonsContainer}>
            <View
                style={{
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: 8,
                }}
            >
                <TouchableOpacity
                    onPress={toggleAddTips}
                    style={styles.mainButtonContainer}
                >
                    <FontAwesome style={styles.mainButtonElement} name="plus" />
                </TouchableOpacity>
                {isAddingTips && (
                    <View style={{ flexDirection: "row", gap: 4 }}>
                        <TouchableOpacity
                            onPress={() => handlePinState("advice")}
                            style={styles.tipsButtonContainer}
                        >
                            <FontAwesome
                                style={[
                                    styles.adviceColor,
                                    styles.buttonElement,
                                ]}
                                name="thumbs-up"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePinState("warning")}
                            style={styles.tipsButtonContainer}
                        >
                            <FontAwesome
                                style={[
                                    styles.warningColor,
                                    styles.buttonElement,
                                ]}
                                name="thumbs-down"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View>
                <TouchableOpacity style={styles.mainButtonContainer}>
                    <FontAwesome
                        style={styles.mainButtonElement}
                        name="sliders"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ButtonsContainer;
