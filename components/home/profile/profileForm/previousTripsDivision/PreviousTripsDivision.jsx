import { useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./previousTripsDivision.style";
import EditTripModal from "../editTripModal/EditTripModal";

const PreviousTripsDivision = () => {
    const userData = useSelector((state) => state.newUserData.userData);
    return (
        <View style={styles.fieldDivision}>
            <Text style={styles.titleContainer}>My previous Trips</Text>
            {userData.previousTrips.map((trip, index) => (
                <View
                    style={styles.previousTripCard}
                    key={`previous-trip-${index}`}
                >
                    <Text>{trip.title}</Text>
                    <View style={styles.previousTripButtons}>
                        <EditTripModal trip={trip} />
                        <TouchableOpacity>
                            <FontAwesome name="times" />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default PreviousTripsDivision;
