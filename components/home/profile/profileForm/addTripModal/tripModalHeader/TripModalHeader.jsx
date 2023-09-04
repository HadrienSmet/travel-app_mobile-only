import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./tripModalHeader.style";

const TripModalHeader = ({ handleClose }) => {
    return (
        <View style={styles.modalHeader}>
            <TouchableOpacity onPress={handleClose}>
                <FontAwesome style={styles.closingIcon} name="times" />
            </TouchableOpacity>
            <Text style={styles.modalMainTitle}>Add a new trip!</Text>
        </View>
    );
};

export default TripModalHeader;
