import { useState } from "react";
import { Dimensions, Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import MapView from "react-native-maps";
import styles from "./markersDisplayer.style";
import { timestampToDate } from "../../../../../../utils/functions/timestampToDate";
import MapPin from "../../../../../common/mapPin/MapPin";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "@env";
import { useDirections } from "../../../../../../hooks/useDirections";

const { width, height } = Dimensions.get("window");

const aspectRatio = width / height;
const latDelta = 0.04;
const longDelta = latDelta * aspectRatio;

const MarkersDisplayer = ({ color, markersList }) => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(undefined);
    const { origin, destination, waypoints } = useDirections(markersList);

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
                        latitudeDelta: latDelta,
                        longitudeDelta: longDelta,
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
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        waypoints={waypoints}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={4}
                        strokeColor={color}
                    />
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
