import { Marker } from "react-native-maps";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./draggableMapPin.style";

const DraggableMapPin = ({
    color,
    marker,
    setNewLocation,
    setSelectedMarker,
}) => {
    const handleDragEnd = (e) => setNewLocation(e.nativeEvent.coordinate);
    const handleIconName = (markerType) => {
        switch (markerType) {
            case "arrival":
                return "plane-arrival";
            case "stopover":
                return "bed";
            case "departure":
                return "plane-departure";
        }
    };

    return (
        <Marker
            coordinate={marker.location}
            onPress={() => setSelectedMarker(marker)}
            onDragEnd={handleDragEnd}
            draggable
        >
            <View style={[styles.mapPinContainer]}>
                <FontAwesome
                    style={[styles.mapPin, { color: color }]}
                    name="map-marker"
                />
                <View style={styles.mapPinCircle}></View>
                <FontAwesome
                    name={handleIconName(marker.type)}
                    style={[styles.mapPinIcon, { color: color }]}
                />
            </View>
        </Marker>
    );
};

export default DraggableMapPin;
