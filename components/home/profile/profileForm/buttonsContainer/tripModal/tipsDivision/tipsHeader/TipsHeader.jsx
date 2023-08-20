import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./tipsHeader.style";

const TipsHeader = ({ toggleAccordion }) => {
    return (
        <View style={styles.divisionHeader}>
            <Text style={styles.mainTitle}>
                Some tips to share about your trip?
            </Text>
            <TouchableOpacity onPress={toggleAccordion}>
                <FontAwesome style={styles.mainTitle} name="plus" />
            </TouchableOpacity>
        </View>
    );
};

export default TipsHeader;
