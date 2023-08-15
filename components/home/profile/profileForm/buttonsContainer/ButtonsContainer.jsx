import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./buttonsContainer.style";

const ButtonsContainer = ({ handleConfirm }) => {
    return (
        <View style={styles.buttonsDivision}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.basicContainerStyle, styles.buttonContainer]}
                >
                    <FontAwesome style={styles.buttonElement} name="camera" />
                    <Text style={styles.buttonElement}>Edit albums</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.basicContainerStyle, styles.buttonContainer]}
                >
                    <FontAwesome style={styles.buttonElement} name="map" />
                    <Text style={styles.buttonElement}>Edit albums</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={handleConfirm}
                style={[styles.basicContainerStyle, styles.confirmContainer]}
            >
                <FontAwesome style={styles.confirmElement} name="check" />
                <Text style={styles.confirmElement}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonsContainer;
