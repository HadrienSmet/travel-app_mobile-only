import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./backButton.style";

const BackButton = ({ handleClose }) => {
    return (
        <View style={styles.backButtonDivision}>
            <TouchableOpacity
                onPress={handleClose}
                style={styles.buttonContainer}
            >
                <FontAwesome name="arrow-left" />
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;
