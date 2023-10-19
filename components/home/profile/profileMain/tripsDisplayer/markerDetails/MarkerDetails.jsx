import { useState } from "react";
import { useSelector } from "react-redux";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { timestampToDate } from "../../../../../../utils/functions";
import { axiosPatchTrips } from "../../../../../../utils/axios/user";
import { COLORS } from "../../../../../../constants";
import styles from "./markerDetails.style";

const useMarkerDetails = (selectedMarker, newLocation) => {
    const userData = useSelector((state) => state.userDataReducer.userData);
    const { _id, token } = userData;
    const { trip, step } = selectedMarker;
    const [newContent, setNewContent] = useState(step.content);

    const handleUpdatedTrip = () => {
        const stepIndex = trip.steps.findIndex((curr) => curr._id === step._id);
        const newStep = { ...step };
        newStep.content = newContent;
        newStep.location = newLocation;
        const updatedTrip = { ...trip };
        const newSteps = [...updatedTrip.steps];
        newSteps.splice(stepIndex, 1, newStep);
        updatedTrip.steps = newSteps;
        return updatedTrip;
    };

    const handleConfirm = () => {
        const updatedTrip = handleUpdatedTrip();
        axiosPatchTrips(_id, updatedTrip, token)
            .then(() => console.log("updated succeeded"))
            .catch((err) => console.log(err));
    };

    return { newContent, handleConfirm, setNewContent };
};

const MarkerDetails = ({
    isEditing,
    newLocation,
    selectedMarker,
    removeDetails,
}) => {
    const { step } = selectedMarker;
    const { newContent, handleConfirm, setNewContent } = useMarkerDetails(
        selectedMarker,
        newLocation
    );
    return (
        <View style={styles.markerDetails}>
            <View style={styles.detailsButtonRow}>
                <TouchableOpacity onPress={removeDetails}>
                    <FontAwesome name="times" />
                </TouchableOpacity>
            </View>
            <View style={styles.detailsHeader}>
                <Text style={[styles.mainContent, styles.toUppercase]}>
                    {step.type}
                </Text>
                <Text style={styles.mainContent}>
                    {timestampToDate(step.date)}
                </Text>
            </View>
            {isEditing ? (
                <TextInput value={newContent} onChangeText={setNewContent} />
            ) : (
                <Text style={styles.detailsContent}>{step.content}</Text>
            )}
            {isEditing && (
                <TouchableOpacity
                    style={{
                        width: "50%",
                        marginHorizontal: "25%",
                        paddingVertical: 8,
                        borderRadius: 40,
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={handleConfirm}
                >
                    <Text style={{ color: COLORS.primary }}>Confirm</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MarkerDetails;
