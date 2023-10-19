import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import MarkerDetails from "./markerDetails/MarkerDetails";
import MapContainer from "./mapContainer/MapContainer";
import { putPreviousTrip } from "../../../../../features/userData.slice";
import styles from "./tripsDisplayer.style";

const useTripsDisplayer = () => {
    const dispatch = useDispatch();
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [newLocation, setNewLocation] = useState(undefined);
    const [selectedMarker, setSelectedMarker] = useState(undefined);

    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    const removeDetails = () => setSelectedMarker(undefined);
    const toggleEdit = () => setEditing((state) => !state);

    useEffect(() => {
        if (selectedMarker !== undefined)
            setNewLocation(selectedMarker.step.location);
    }, [selectedMarker]);
    useEffect(() => {
        const patchLocation = () => {
            const { trip, step } = selectedMarker;
            const stepIndex = trip.steps.findIndex(
                (curr) => curr._id === step.id
            );
            const newStep = { ...step };
            newStep.location = newLocation;
            const updatedTrip = { ...trip };
            const newSteps = [...updatedTrip.steps];
            newSteps.splice(stepIndex, 1, newStep);
            updatedTrip.steps = newSteps;
            dispatch(putPreviousTrip(updatedTrip));
        };
        if (newLocation) patchLocation();
    }, [newLocation]);

    return {
        isEditing,
        isMapOpen,
        newLocation,
        selectedMarker,
        openMap,
        closeMap,
        removeDetails,
        setNewLocation,
        setSelectedMarker,
        toggleEdit,
    };
};

const TripsDisplayer = () => {
    const {
        isEditing,
        isMapOpen,
        newLocation,
        selectedMarker,
        openMap,
        closeMap,
        removeDetails,
        setNewLocation,
        setSelectedMarker,
        toggleEdit,
    } = useTripsDisplayer();
    return (
        <>
            <Modal visible={isMapOpen}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.mapButtonContainer}
                        onPress={closeMap}
                    >
                        <FontAwesome name="times" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={toggleEdit}
                        style={styles.mapButtonContainer}
                    >
                        <FontAwesome name="edit" />
                    </TouchableOpacity>
                </View>
                <MapContainer
                    isEditing={isEditing}
                    setNewLocation={setNewLocation}
                    setSelectedMarker={setSelectedMarker}
                />
                {selectedMarker !== undefined && newLocation !== undefined && (
                    <MarkerDetails
                        isEditing={isEditing}
                        newLocation={newLocation}
                        selectedMarker={selectedMarker}
                        removeDetails={removeDetails}
                    />
                )}
            </Modal>
            <TouchableOpacity
                style={styles.modalButtonContainer}
                onPress={openMap}
            >
                <Text style={styles.modalButtonContent}>My trips</Text>
                <FontAwesome style={styles.modalButtonContent} name="plane" />
            </TouchableOpacity>
        </>
    );
};

export default TripsDisplayer;
