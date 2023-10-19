import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./userHeader.style";

const UserHeader = ({ username }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={[styles.headerElement, { fontSize: 24 }]}>
                {username}
            </Text>
            <TouchableOpacity>
                <FontAwesome
                    style={[styles.headerElement, { fontSize: 36 }]}
                    name="angle-down"
                />
            </TouchableOpacity>
        </View>
    );
};

export default UserHeader;
