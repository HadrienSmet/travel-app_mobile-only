import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./addingButtons.style";

const AddingButtons = ({ isAddingTips, handlePinState, toggleAddTips }) => {
    return (
        <View style={styles.addingButtonsRow}>
            <TouchableOpacity
                onPress={toggleAddTips}
                style={styles.mainButtonContainer}
            >
                <FontAwesome style={styles.mainButtonElement} name="plus" />
            </TouchableOpacity>
            {isAddingTips && (
                <View style={styles.addingButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => handlePinState("advice")}
                        style={styles.tipsButtonContainer}
                    >
                        <FontAwesome
                            style={[styles.adviceColor, styles.buttonElement]}
                            name="thumbs-up"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePinState("warning")}
                        style={styles.tipsButtonContainer}
                    >
                        <FontAwesome
                            style={[styles.warningColor, styles.buttonElement]}
                            name="thumbs-down"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default AddingButtons;
