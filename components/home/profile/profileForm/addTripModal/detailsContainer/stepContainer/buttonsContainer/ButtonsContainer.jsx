import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./buttonsContainer.style";
import { COLORS } from "../../../../../../../../constants";

const ButtonsContainer = ({ isEditing, setEditing }) => {
    return (
        <View style={styles.buttonsContainer}>
            {!isEditing ? (
                <>
                    <TouchableOpacity onPress={() => setEditing(true)}>
                        <FontAwesome style={styles.iconstStyle} name="edit" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome style={styles.iconstStyle} name="times" />
                    </TouchableOpacity>
                </>
            ) : (
                <TouchableOpacity>
                    <FontAwesome
                        style={[styles.iconstStyle, { color: COLORS.primary }]}
                        name="check"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ButtonsContainer;
