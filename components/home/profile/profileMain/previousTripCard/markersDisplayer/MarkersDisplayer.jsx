import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import { COLORS, SHADES, SHADOWS } from "../../../../../../constants";
import styles from "./markersDisplayer.style";

const MarkersDisplayer = ({ markersList, buttonText }) => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(undefined);
    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    const removeDetails = () => setSelectedMarker(undefined);

    const handlePinColor = (markerType) => {
        switch (markerType) {
            case "arrival":
                return COLORS.primary;
            case "stopover":
                return COLORS.secondary;
            case "departure":
                return COLORS.tertiary;
            case "advice":
                return "green";
            case "warning":
                return "red";
        }
    };

    useEffect(() => {
        console.log("markersList");
        console.log(markersList);
    }, []);
    useEffect(() => {
        console.log(selectedMarker);
    }, [selectedMarker]);

    return (
        <>
            <Modal visible={isMapOpen}>
                <TouchableOpacity
                    style={styles.mapButtonContainer}
                    onPress={closeMap}
                >
                    <FontAwesome name="times" />
                </TouchableOpacity>
                <MapView
                    initialRegion={{
                        ...markersList[0].location,
                        latitudeDelta: 0.9,
                        longitudeDelta: 0.9,
                    }}
                    style={styles.mapContainer}
                >
                    {markersList.map((marker, index) => (
                        <Marker
                            key={`marker-${index}`}
                            coordinate={marker.location}
                            pinColor={handlePinColor(marker.type)}
                            onPress={() => setSelectedMarker(marker)}
                        />
                    ))}
                </MapView>
                {selectedMarker !== undefined && (
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailsButtonRow}>
                            <TouchableOpacity onPress={removeDetails}>
                                <FontAwesome name="times" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsHeader}>
                            <Text
                                style={[
                                    styles.mainContent,
                                    { textTransform: "uppercase" },
                                ]}
                            >
                                {selectedMarker.type}
                            </Text>
                            <Text style={styles.mainContent}>
                                {selectedMarker.date !== undefined
                                    ? selectedMarker.date.day +
                                      "/" +
                                      selectedMarker.date.month +
                                      "/" +
                                      selectedMarker.date.year
                                    : selectedMarker.about}
                            </Text>
                        </View>
                        <Text style={styles.detailsContent}>
                            {selectedMarker.content}
                        </Text>
                    </View>
                )}
            </Modal>
            <TouchableOpacity
                style={styles.modalButtonContainer}
                onPress={openMap}
            >
                <Text style={styles.modalButtonContent}>
                    My {buttonText} on a map
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default MarkersDisplayer;
