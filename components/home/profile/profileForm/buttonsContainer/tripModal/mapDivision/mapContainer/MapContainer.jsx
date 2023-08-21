import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../../../../../../../constants";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./mapContainer.style";

const MapContainer = ({
    adviceLocation,
    arrivalLocation,
    departureLocation,
    stopoverLocation,
    warningLocation,
    mapState,
    handleLongPress,
    handlePinState,
}) => {
    return (
        <>
            {mapState === "map" && (
                <>
                    <MapView
                        style={styles.mapView}
                        onLongPress={handleLongPress}
                    >
                        {arrivalLocation.latitude !== undefined && (
                            <Marker
                                coordinate={arrivalLocation}
                                pinColor={COLORS.primary}
                            />
                        )}
                        {departureLocation.latitude !== undefined && (
                            <Marker
                                coordinate={departureLocation}
                                pinColor={COLORS.tertiary}
                            />
                        )}
                        {stopoverLocation.length !== 0 &&
                            stopoverLocation.map((stopover, index) => (
                                <Marker
                                    key={index}
                                    coordinate={stopover}
                                    pinColor={COLORS.secondary}
                                />
                            ))}
                        {adviceLocation.length !== 0 &&
                            adviceLocation.map((advice, index) => (
                                <Marker
                                    key={index}
                                    coordinate={advice}
                                    pinColor="green"
                                />
                            ))}
                        {warningLocation.length !== 0 &&
                            warningLocation.map((warning, index) => (
                                <Marker
                                    key={index}
                                    coordinate={warning}
                                    pinColor="red"
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
