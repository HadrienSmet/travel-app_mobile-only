import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = {
    iconsContainer: {
        flexDirection: "row",
        gap: 24,
    },
    iconsStyle: {
        fontSize: 20,
    },
};

const RightButtons = () => {
    return (
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <FontAwesome style={styles.iconsStyle} name="bell" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome style={styles.iconsStyle} name="sliders" />
            </TouchableOpacity>
        </View>
    );
};

export default RightButtons;
