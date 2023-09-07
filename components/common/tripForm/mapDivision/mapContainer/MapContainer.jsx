import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../../../../constants";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./mapContainer.style";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MapContainer = ({ mapState, handleLongPress, handlePinState }) => {
    const [initialRegion, setInitialRegion] = useState(undefined);
    const previousTripData = useSelector(
        (state) => state.previousTripReducer.previousTripData
    );

    useEffect(() => {
        if (previousTripData.steps.length !== 0) {
            setInitialRegion({
                ...previousTripData.steps[0].location,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
            });
        }
    }, [previousTripData.steps]);

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

    return (
        <>
            {mapState === "map" && (
                <>
                    <MapView
                        style={styles.mapView}
                        onLongPress={handleLongPress}
                        initialRegion={initialRegion}
                    >
                        {previousTripData.steps.length !== 0 &&
                            previousTripData.steps.map((step, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    coordinate={step.location}
                                    pinColor={handlePinColor(step.type)}
                                    onPress={() => setSelectedMarker(step)}
                                />
                            ))}
                        {previousTripData.tips.length !== 0 &&
                            previousTripData.tips.map((tips, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    coordinate={tips.location}
                                    pinColor={handlePinColor(tips.type)}
                                    onPress={() => setSelectedMarker(tips)}
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
                        <TouchableOpacity
                            onPress={() => handlePinState("advice")}
                        >
                            <FontAwesome
                                style={styles.adviceColor}
                                name="thumbs-up"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePinState("warning")}
                        >
                            <FontAwesome
                                style={styles.warningColor}
                                name="thumbs-down"
                            />
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </>
    );
};

export default MapContainer;
