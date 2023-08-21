import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import TripEventForm from "./tripEventForm/TripEventForm";
import TripTipsForm from "./tripTipsForm/TripTipsForm";
import { COLORS } from "../../../../../../../constants";
import styles from "./mapDivision.style";
import MapContainer from "./mapContainer/MapContainer";

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

const MapDivision = ({ pushTripSteps, pushTripTips }) => {
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
                {mapState === "arrival" && (
                    <TripEventForm
                        eventLocation={arrivalLocation}
                        eventType={mapState}
                        formBackground={COLORS.primary}
                        pushTripStep={handleTripSteps}
                    />
                )}
                {mapState === "stopover" && (
                    <TripEventForm
                        eventLocation={
                            stopoverLocation[stopoverLocation.length - 1]
                        }
                        eventType={mapState}
                        formBackground={COLORS.secondary}
                        pushTripStep={handleTripSteps}
                    />
                )}
                {mapState === "departure" && (
                    <TripEventForm
                        eventLocation={departureLocation}
                        eventType={mapState}
                        formBackground={COLORS.tertiary}
                        pushTripStep={handleTripSteps}
                    />
                )}
                {mapState === "advice" && (
                    <TripTipsForm
                        formBackground="green"
                        tipsLocation={adviceLocation[adviceLocation.length - 1]}
                        tipsType={mapState}
                        pushTips={handleTripTips}
                    />
                )}
                {mapState === "warning" && (
                    <TripTipsForm
                        formBackground="red"
                        tipsLocation={
                            warningLocation[warningLocation.length - 1]
                        }
                        tipsType={mapState}
                        pushTips={handleTripTips}
                    />
                )}
            </View>
        </View>
    );
};

export default MapDivision;
