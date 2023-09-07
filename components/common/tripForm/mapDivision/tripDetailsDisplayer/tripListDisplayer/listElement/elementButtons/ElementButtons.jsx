import React from "react";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./elementButtons.style";

const ElementButtons = ({ editElement }) => {
    return (
        <View style={styles.buttonsRow}>
            <TouchableOpacity
                style={[styles.elementButtonContainer, styles.editButton]}
            >
                <FontAwesome
                    style={styles.buttonContent}
                    name="map-marker-alt"
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={editElement}
                style={[styles.elementButtonContainer, styles.editButton]}
            >
                <FontAwesome style={styles.buttonContent} name="edit" />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.elementButtonContainer, styles.deleteButton]}
            >
                <FontAwesome style={styles.buttonContent} name="times" />
            </TouchableOpacity>
        </View>
    );
};

export default ElementButtons;
