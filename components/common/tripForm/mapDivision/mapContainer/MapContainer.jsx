import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../../../../constants";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./mapContainer.style";
import { useEffect, useState } from "react";

const MapContainer = ({
    // adviceLocation,
    // arrivalLocation,
    // departureLocation,
    // stopoverLocation,
    // warningLocation,
    tripSteps,
    tripTips,
    mapState,
    handleLongPress,
    handlePinState,
}) => {
    const [initialRegion, setInitialRegion] = useState(undefined);

    useEffect(() => {
        if (tripSteps.length !== 0) {
            setInitialRegion({
                ...tripSteps[0].location,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
            });
        }
    }, [tripSteps]);

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
                        {tripSteps.length !== 0 &&
                            tripSteps.map((step, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    coordinate={step.location}
                                    pinColor={handlePinColor(step.type)}
                                    onPress={() => setSelectedMarker(step)}
                                />
                            ))}
                        {tripTips.length !== 0 &&
                            tripTips.map((tips, index) => (
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
