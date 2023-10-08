import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./tripsDisplayer.style";
import MarkerDetails from "./markerDetails/MarkerDetails";
import MapContainer from "./mapContainer/MapContainer";

const useTripsDisplayer = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(undefined);

    useEffect(() => {
        console.log(selectedMarker), [selectedMarker];
    });

    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    const removeDetails = () => setSelectedMarker(undefined);

    return {
        isMapOpen,
        selectedMarker,
        openMap,
        closeMap,
        removeDetails,
        setSelectedMarker,
    };
};

const TripsDisplayer = () => {
    const {
        isMapOpen,
        selectedMarker,
        openMap,
        closeMap,
        removeDetails,
        setSelectedMarker,
    } = useTripsDisplayer();
    return (
        <>
            <Modal visible={isMapOpen}>
                <TouchableOpacity
                    style={styles.mapButtonContainer}
                    onPress={closeMap}
                >
                    <FontAwesome name="times" />
                </TouchableOpacity>
                <MapContainer setSelectedMarker={setSelectedMarker} />
                {selectedMarker !== undefined && (
                    <MarkerDetails
                        selectedMarker={selectedMarker}
                        removeDetails={removeDetails}
                    />
                )}
            </Modal>
            <TouchableOpacity
                style={styles.modalButtonContainer}
                onPress={openMap}
            >
                <Text style={styles.modalButtonContent}>My previous trips</Text>
            </TouchableOpacity>
        </>
    );
};

export default TripsDisplayer;
