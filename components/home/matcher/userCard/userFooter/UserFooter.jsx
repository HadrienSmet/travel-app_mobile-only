import { View, Text } from "react-native";
import styles from "./userFooter.style";

const UserFooter = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerElement}>21km</Text>
        </View>
    );
};

export default UserFooter;
