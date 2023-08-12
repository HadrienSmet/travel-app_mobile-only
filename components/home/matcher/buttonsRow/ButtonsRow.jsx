import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./buttonsRow.style";
import { COLORS } from "../../../../constants";

const ButtonsRow = () => {
    return (
        <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
                <FontAwesome
                    style={[styles.iconStyle, { color: COLORS.refusal }]}
                    name="times"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <FontAwesome
                    style={[styles.iconStyle, { color: COLORS.primary }]}
                    name="comment"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <FontAwesome
                    style={[styles.iconStyle, { color: COLORS.approval }]}
                    name="check"
                />
            </TouchableOpacity>
        </View>
    );
};

export default ButtonsRow;
