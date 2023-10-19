import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./detailsHeader.style";

const DetailsHeader = ({ areDetailsVisible, toggleDetails }) => {
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    const { title } = tripData;
    return (
        <View style={styles.detailsHeader}>
            <Text style={styles.detailsHeaderElem}>{title}</Text>
            <TouchableOpacity onPress={toggleDetails}>
                <FontAwesome
                    style={
                        areDetailsVisible
                            ? [styles.detailsHeaderElem, styles.upsideDownIcon]
                            : styles.detailsHeaderElem
                    }
                    name="angle-up"
                />
            </TouchableOpacity>
        </View>
    );
};

export default DetailsHeader;
