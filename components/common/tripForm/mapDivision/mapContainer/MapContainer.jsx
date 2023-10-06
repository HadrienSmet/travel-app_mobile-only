import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../../../../constants";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./mapContainer.style";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MapContainer = ({ mapState, handleLongPress, handlePinState }) => {
    const [initialRegion, setInitialRegion] = useState(undefined);
    const tripData = useSelector((state) => state.tripDataReducer.tripData);

    useEffect(() => {
        if (tripData.steps.length !== 0) {
            setInitialRegion({
                ...tripData.steps[0].location,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
            });
        }
    }, [tripData.steps]);

    const handlePinColor = (markerType) => {
        switch (markerType) {
            case "arrival":
                return COLORS.primary;
            case "stopover":
                return COLORS.secondary;
            case "departure":
                return COLORS.tertiary;
        }
    };

    return (
        <>
            {mapState === "map" && (
                <>
                    <MapView
                        style={styles.mapView}
                        onLongPress={handleLongPress}
                        initialRegion={initialRegion}
                    >
                        {tripData.steps.length !== 0 &&
                            tripData.steps.map((step, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    coordinate={step.location}
                                    pinColor={handlePinColor(step.type)}
                                    onPress={() => setSelectedMarker(step)}
                                />
                            ))}
                    </MapView>
                    <View style={styles.mapIconsContainer}>
                        <TouchableOpacity
                            onPress={() => handlePinState("arrival")}
                        >
                            <FontAwesome
                                style={styles.arrivalColor}
                                name="plane-arrival"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePinState("stopover")}
                        >
                            <FontAwesome
                                style={styles.stopoverColor}
                                name="map-marker"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePinState("departure")}
                        >
                            <FontAwesome
                                style={styles.departureColor}
                                name="plane-departure"
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </>
    );
};

export default MapContainer;
