import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosDeleteTrip } from "../../../../../utils/axios/user";
import { removeUserTrip } from "../../../../../features/userData.slice";

import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EditTripModal from "../editTripModal/EditTripModal";
import styles from "./previousTripsDivision.style";

const PreviousTripsDivision = () => {
    const [isCertainRemove, setCertainRemove] = useState(false);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const dispatch = useDispatch();

    const handleDelete = (tripTitle) => {
        if (!isCertainRemove) {
            alert(
                "You are about to delete one of your trip. All the data will be lost."
            );
            setCertainRemove(true);
        } else {
            axiosDeleteTrip(userData._id, tripTitle, userData.token)
                .then(() => dispatch(removeUserTrip(tripTitle)))
                .catch((err) => alert(err.message));
            setCertainRemove(true);
        }
    };
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
                        <TouchableOpacity
                            onPress={() => handleDelete(trip.title)}
                        >
                            <FontAwesome name="times" />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default PreviousTripsDivision;
