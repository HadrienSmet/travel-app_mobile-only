import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./tripButtonsDivision.style";

const TripButtonsDivision = ({ handlePinState }) => {
    return (
        <View style={styles.tripButtonsDivision}>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handlePinState("arrival")}
            >
                <FontAwesome style={styles.arrivalColor} name="plane-arrival" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handlePinState("stopover")}
            >
                <FontAwesome style={styles.stopoverColor} name="bed" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => handlePinState("departure")}
            >
                <FontAwesome
                    style={styles.departureColor}
                    name="plane-departure"
                />
            </TouchableOpacity>
        </View>
    );
};

export default TripButtonsDivision;
