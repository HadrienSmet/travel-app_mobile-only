import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./tripButtonsDivision.style";

const TripButtonsDivision = ({ pinState, handlePinState }) => {
    const handleButtonStyle = (buttonAbout) => {
        const buttonStyle =
            pinState === buttonAbout
                ? styles.selectedColor
                : styles.defaultColor;
        return buttonStyle;
    };
    return (
        <View style={styles.tripButtonsDivision}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handlePinState("arrival")}
            >
                <FontAwesome
                    style={handleButtonStyle("arrival")}
                    name="plane-arrival"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handlePinState("stopover")}
            >
                <FontAwesome style={handleButtonStyle("stopover")} name="bed" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handlePinState("departure")}
            >
                <FontAwesome
                    style={handleButtonStyle("departure")}
                    name="plane-departure"
                />
            </TouchableOpacity>
        </View>
    );
};

export default TripButtonsDivision;
