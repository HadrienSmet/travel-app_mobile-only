import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ButtonsRow = () => {
    return (
        <View>
            <TouchableOpacity>
                <FontAwesome name="times" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="comment" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="check" />
            </TouchableOpacity>
        </View>
    );
};

export default ButtonsRow;
