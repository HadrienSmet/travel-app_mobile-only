import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../../../../../../constants";
import TripEventForm from "./tripEventForm/TripEventForm";

const windowHeight = Dimensions.get("window").height;

const useMapPin = () => {
    const [tripSteps, setTripSteps] = useState([]);
    const [mapState, setMapState] = useState("map");
    const [pinState, setPinState] = useState("");
    const [stopoverLocation, setStopoverLocation] = useState([]);
    const [adviseLocation, setAdviseLocation] = useState([]);
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
    const handleMapState = (state) => {
        setTimeout(() => {
            setMapState(state);
        }, 700);
    };
    const getArrivalPin = () => setPinState("arrival");
    const getDeparturePin = () => setPinState("departure");
    const getStopoverPin = () => setPinState("stopover");
    const getAdvisePin = () => setPinState("advise");
    const getWarningPin = () => setPinState("warning");
    const handleTripSteps = (data) => {
        setTripSteps((state) => [...state, data]);
        resetMapState();
        setPinState("");
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
    const handleAdvise = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setAdviseLocation((state) => [...state, { latitude, longitude }]);
        handleMapState("advise");
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
            case "advise":
                handleAdvise(e);
                break;
            case "warning":
                handleWarning(e);
                break;
            default:
                null;
        }
    };

    useEffect(() => {
        console.log(tripSteps);
    }, [tripSteps]);

    return {
        mapState,
        adviseLocation,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        warningLocation,
        getAdvisePin,
        getArrivalPin,
        getDeparturePin,
        getStopoverPin,
        getWarningPin,
        handleLongPress,
        handleTripSteps,
    };
};

const MapContainer = () => {
    const {
        mapState,
        adviseLocation,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        warningLocation,
        getAdvisePin,
        getArrivalPin,
        getDeparturePin,
        getStopoverPin,
        getWarningPin,
        handleLongPress,
        handleTripSteps,
    } = useMapPin();

    return (
        <View style={{ paddingVertical: 16, gap: 12 }}>
            <Text style={{ fontSize: SIZES.medium, color: COLORS.black }}>
                Give us some details about your trip on the map
            </Text>
            <View>
                {mapState === "map" && (
                    <>
                        <MapView
                            style={{
                                width: "100%",
                                height: windowHeight - 348,
                            }}
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
                            {adviseLocation.length !== 0 &&
                                adviseLocation.map((advise, index) => (
                                    <Marker
                                        key={index}
                                        coordinate={advise}
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
                        <View
                            style={{
                                position: "absolute",
                                alignItems: "center",
                                top: 12,
                                right: 12,
                                gap: 12,
                                padding: 8,
                                backgroundColor: COLORS.white,
                                borderRadius: 60,
                            }}
                        >
                            <TouchableOpacity onPress={getArrivalPin}>
                                <FontAwesome
                                    style={{ color: COLORS.primary }}
                                    name="plane-arrival"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={getStopoverPin}>
                                <FontAwesome
                                    style={{ color: COLORS.secondary }}
                                    name="map-marker"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={getDeparturePin}>
                                <FontAwesome
                                    style={{ color: COLORS.tertiary }}
                                    name="plane-departure"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={getAdvisePin}>
                                <FontAwesome
                                    style={{ color: "green" }}
                                    name="thumbs-up"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={getWarningPin}>
                                <FontAwesome
                                    style={{ color: "red" }}
                                    name="thumbs-down"
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
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
            </View>
        </View>
    );
};

export default MapContainer;
