import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./mapDivision.style";
import MapContainer from "./mapContainer/MapContainer";
import MarkerFormsContainer from "./markerFormsContainer/MarkerFormsContainer";
import TripDetailsDisplayer from "./tripDetailsDisplayer/TripDetailsDisplayer";
import { useDispatch } from "react-redux";
import { pushStep } from "../../../../features/tripData.slice";

const useMapPin = () => {
    const dispatch = useDispatch();
    const [mapState, setMapState] = useState("map");
    const [pinState, setPinState] = useState("");
    const [stopoverLocation, setStopoverLocation] = useState([]);
    const [arrivalLocation, setArrivalLocation] = useState({
        latitude: undefined,
        longitude: undefined,
    });
    const [departureLocation, setDepartureLocation] = useState({
        latitude: undefined,
        longitude: undefined,
    });

    const resetMapState = () => setMapState("map");
    const handlePinState = (state) => setPinState(state);
    const handleMapState = (state) => {
        setTimeout(() => {
            setMapState(state);
        }, 700);
    };
    const handleTripSteps = (data) => {
        dispatch(pushStep(data));
        resetMapState();
        handlePinState("");
    };
    const handleArrival = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setArrivalLocation({ latitude, longitude });
        handleMapState("arrival");
    };
    const handleDeparture = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setDepartureLocation({ latitude, longitude });
        handleMapState("departure");
    };
    const handleStopover = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setStopoverLocation((state) => [...state, { latitude, longitude }]);
        handleMapState("stopover");
    };
    const handleLongPress = (e) => {
        switch (pinState) {
            case "arrival":
                handleArrival(e);
                break;
            case "departure":
                handleDeparture(e);
                break;
            case "stopover":
                handleStopover(e);
                break;
            default:
                null;
        }
    };

    return {
        mapState,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        handlePinState,
        handleLongPress,
        handleTripSteps,
    };
};

const MapDivision = ({ tripTitle }) => {
    const {
        mapState,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        handlePinState,
        handleLongPress,
        handleTripSteps,
    } = useMapPin();

    return (
        <View style={styles.mapDivision}>
            <Text style={styles.mainTitle}>
                Give us some details about your trip on the map
            </Text>
            <View>
                <MapContainer
                    mapState={mapState}
                    handleLongPress={handleLongPress}
                    handlePinState={handlePinState}
                />
                <MarkerFormsContainer
                    mapState={mapState}
                    arrivalLocation={arrivalLocation}
                    departureLocation={departureLocation}
                    stopoverLocation={stopoverLocation}
                    handleTripSteps={handleTripSteps}
                />
            </View>
            <TripDetailsDisplayer tripTitle={tripTitle} />
        </View>
    );
};

export default MapDivision;
