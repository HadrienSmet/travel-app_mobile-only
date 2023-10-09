import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./tripsDisplayer.style";
import MarkerDetails from "./markerDetails/MarkerDetails";
import MapContainer from "./mapContainer/MapContainer";

const useTripsDisplayer = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [newLocation, setNewLocation] = useState(undefined);
    const [selectedMarker, setSelectedMarker] = useState(undefined);

    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    const removeDetails = () => setSelectedMarker(undefined);
    const toggleEdit = () => setEditing((state) => !state);

    useEffect(() => {
        console.log(selectedMarker);
        if (selectedMarker !== undefined)
            setNewLocation(selectedMarker.step.location);
    }, [selectedMarker]);
    useEffect(() => {
        console.log(newLocation);
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
    useEffect(() => {
        console.log(isEditing);
    }, [isEditing]);
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
