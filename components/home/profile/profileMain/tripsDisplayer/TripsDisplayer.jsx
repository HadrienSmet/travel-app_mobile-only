import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./tripsDisplayer.style";
import MarkerDetails from "./markerDetails/MarkerDetails";
import MapContainer from "./mapContainer/MapContainer";

const useTripsDisplayer = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(undefined);

    useEffect(() => {
        console.log(selectedMarker), [selectedMarker];
    });

    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    const removeDetails = () => setSelectedMarker(undefined);
    const toggleEdit = () => setEditing((state) => !state);

    return {
        isEditing,
        isMapOpen,
        selectedMarker,
        openMap,
        closeMap,
        removeDetails,
        toggleEdit,
        setSelectedMarker,
    };
};

const TripsDisplayer = () => {
    const {
        isEditing,
        isMapOpen,
        selectedMarker,
        openMap,
        closeMap,
        removeDetails,
        toggleEdit,
        setSelectedMarker,
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
                <MapContainer setSelectedMarker={setSelectedMarker} />
                {selectedMarker !== undefined && (
                    <MarkerDetails
                        isEditing={isEditing}
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
