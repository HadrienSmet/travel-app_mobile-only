import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { timestampToDate } from "../../../../../../utils/functions/timestampToDate";
import styles from "./markerDetails.style";

const MarkerDetails = ({ selectedMarker, removeDetails }) => {
    return (
        <View style={styles.markerDetails}>
            <View style={styles.detailsButtonRow}>
                <TouchableOpacity onPress={removeDetails}>
                    <FontAwesome name="times" />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsHeader}>
                <Text style={[styles.mainContent, styles.toUppercase]}>
                    {selectedMarker.type}
                </Text>
                <Text style={styles.mainContent}>
                    {timestampToDate(selectedMarker.date)}
                </Text>
            </View>
            <Text style={styles.detailsContent}>{selectedMarker.content}</Text>
        </View>
    );
};

export default MarkerDetails;
