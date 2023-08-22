import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./mapDivision.style";
import MapContainer from "./mapContainer/MapContainer";
import MarkerFormsContainer from "./markerFormsContainer/MarkerFormsContainer";
import TripDetailsDisplayer from "./tripDetailsDisplayer/TripDetailsDisplayer";

const useMapPin = ({ pushTripSteps, pushTripTips }) => {
    const [mapState, setMapState] = useState("map");
    const [pinState, setPinState] = useState("");
    const [stopoverLocation, setStopoverLocation] = useState([]);
    const [adviceLocation, setAdviceLocation] = useState([]);
    const [warningLocation, setWarningLocation] = useState([]);
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
        pushTripSteps(data);
        resetMapState();
        handlePinState("");
    };
    const handleTripTips = (data) => {
        pushTripTips(data);
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
    const handleAdvice = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setAdviceLocation((state) => [...state, { latitude, longitude }]);
        handleMapState("advice");
    };
    const handleWarning = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setWarningLocation((state) => [...state, { latitude, longitude }]);
        handleMapState("warning");
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
            case "advice":
                handleAdvice(e);
                break;
            case "warning":
                handleWarning(e);
                break;
            default:
                null;
        }
    };

    return {
        mapState,
        adviceLocation,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        warningLocation,
        handlePinState,
        handleLongPress,
        handleTripSteps,
        handleTripTips,
    };
};

const MapDivision = ({
    tripSteps,
    tripTips,
    tripTitle,
    pushTripSteps,
    pushTripTips,
}) => {
    const {
        mapState,
        adviceLocation,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        warningLocation,
        handlePinState,
        handleLongPress,
        handleTripSteps,
        handleTripTips,
    } = useMapPin({ pushTripSteps, pushTripTips });

    return (
        <View style={styles.mapDivision}>
            <Text style={styles.mainTitle}>
                Give us some details about your trip on the map
            </Text>
            <View>
                <MapContainer
                    adviceLocation={adviceLocation}
                    arrivalLocation={arrivalLocation}
                    departureLocation={departureLocation}
                    mapState={mapState}
                    stopoverLocation={stopoverLocation}
                    warningLocation={warningLocation}
                    handleLongPress={handleLongPress}
                    handlePinState={handlePinState}
                />
                <MarkerFormsContainer
                    mapState={mapState}
                    adviceLocation={adviceLocation}
                    arrivalLocation={arrivalLocation}
                    departureLocation={departureLocation}
                    stopoverLocation={stopoverLocation}
                    warningLocation={warningLocation}
                    handleTripSteps={handleTripSteps}
                    handleTripTips={handleTripTips}
                />
            </View>
            <TripDetailsDisplayer
                tripSteps={tripSteps}
                tripTips={tripTips}
                tripTitle={tripTitle}
            />
        </View>
    );
};

export default MapDivision;
