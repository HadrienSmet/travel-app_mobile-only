import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import MapView from "react-native-maps";
import styles from "./markersDisplayer.style";
import { timestampToDate } from "../../../../../../utils/functions/timestampToDate";
import MapPin from "../../../../../common/mapPin/MapPin";

const MarkersDisplayer = ({ color, markersList }) => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(undefined);
    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);
    const removeDetails = () => setSelectedMarker(undefined);

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
                        <MapPin
                            key={`marker-${index}`}
                            marker={marker}
                            setSelectedMarker={setSelectedMarker}
                            color={color}
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
                                {timestampToDate(selectedMarker.date)}
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
                    My journey on a map
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default MarkersDisplayer;
