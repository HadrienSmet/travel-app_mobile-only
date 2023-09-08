import React from "react";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./elementButtons.style";

const ElementButtons = ({ deleteElement, editElement }) => {
    return (
        <View style={styles.buttonsRow}>
            <TouchableOpacity
                onPress={editElement}
                style={[styles.elementButtonContainer, styles.editButton]}
            >
                <FontAwesome style={styles.buttonContent} name="edit" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={deleteElement}
                style={[styles.elementButtonContainer, styles.deleteButton]}
            >
                <FontAwesome style={styles.buttonContent} name="times" />
            </TouchableOpacity>
        </View>
    );
};

export default ElementButtons;
