import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserData } from "../../../../../features/userData.slice";
import {
    pushTripSteps,
    resetState,
} from "../../../../../features/previousTripData.slice";
import { axiosPushTrip } from "../../../../../utils/axios/user";

import { TouchableOpacity, Text, Modal, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

import styles from "./addTripModal.style";
import MapView from "react-native-maps";
import TripEventForm from "../../../../common/tripForm/mapDivision/tripEventForm/TripEventForm";
import { COLORS } from "../../../../../constants";
import PopupForm from "../../../../common/tripForm/popupForm/PopupForm";

const useAddTripModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const dispatch = useDispatch();

    const handleOpen = () => setIsVisible(true);
    const handleClose = () => {
        dispatch(resetState());
        setIsVisible(false);
    };

    const handleConfirm = (data) => {
        if (
            data.title !== "" &&
            data.withWhom !== undefined &&
            data.type !== undefined
        ) {
            axiosPushTrip(userData.userId, data, userData.token)
                .then(() => {
                    const dispatchData = {
                        previousTrips: [...userData.previousTrips, data],
                    };
                    dispatch(setUserData(dispatchData));
                    handleClose();
                })
                .catch((err) => alert(err));
        } else {
            alert(
                "Need to define a title, a type and to share with whom you traveled with"
            );
        }
    };

    return {
        isVisible,
        handleOpen,
        handleClose,
        handleConfirm,
    };
};

const usePopupForm = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState(undefined);
    const [withWhom, setWithWhom] = useState(undefined);

    useEffect(() => {
        const handlePopuDisplay = () => {
            if (title === "" && type === undefined && withWhom === undefined) {
                setPopupVisible(true);
            } else {
                setPopupVisible(false);
            }
        };
    }, [title, type, withWhom]);

    return {
        isPopupVisible,
        title,
        type,
        withWhom,
        setTitle,
        setType,
        setWithWhom,
    };
};

const useMapPins = () => {
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

    useEffect(() => {
        console.log(arrivalLocation);
    }, [arrivalLocation]);
    useEffect(() => {
        console.log(pinState);
    }, [pinState]);
    useEffect(() => {
        console.log(mapState);
    }, [mapState]);

    const resetMapState = () => setMapState("map");
    const handleMapState = (state) => {
        setTimeout(() => {
            setMapState(state);
        }, 700);
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
    const handlePinState = (state) => setPinState(state);

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
    const handleTripSteps = (data) => {
        dispatch(pushTripSteps(data));
        resetMapState();
        handlePinState("");
    };

    return {
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        mapState,
        handleLongPress,
        handlePinState,
        handleTripSteps,
    };
};

const AddTripModal = () => {
    const { isVisible, handleOpen, handleClose, handleConfirm } =
        useAddTripModal();
    const {
        isPopupVisible,
        title,
        type,
        withWhom,
        setTitle,
        setType,
        setWithWhom,
    } = usePopupForm();
    const {
        arrivalLocation,
        stopoverLocation,
        departureLocation,
        mapState,
        handleLongPress,
        handlePinState,
        handleTripSteps,
    } = useMapPins();

    return (
        <>
            <Modal
                visible={isVisible}
                animationType="slide"
                onRequestClose={() => handleClose()}
            >
                <View>
                    <MapView
                        onLongPress={handleLongPress}
                        style={styles.mapContainer}
                    ></MapView>
                    <View style={styles.backButtonDivision}>
                        <TouchableOpacity
                            onPress={handleClose}
                            style={styles.buttonContainer}
                        >
                            <FontAwesome name="arrow-left" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tripButtonsDivision}>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => handlePinState("arrival")}
                        >
                            <FontAwesome
                                style={styles.arrivalColor}
                                name="plane-arrival"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => handlePinState("stopover")}
                        >
                            <FontAwesome
                                style={styles.stopoverColor}
                                name="map-marker"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => handlePinState("departure")}
                        >
                            <FontAwesome
                                style={styles.departureColor}
                                name="plane-departure"
                            />
                        </TouchableOpacity>
                    </View>
                    {isPopupVisible && (
                        <PopupForm
                            title={title}
                            type={type}
                            withWhom={withWhom}
                            setTitle={setTitle}
                            setType={setType}
                            setWithWhom={setWithWhom}
                        />
                    )}
                    <View>
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
                                    stopoverLocation[
                                        stopoverLocation.length - 1
                                    ]
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
            </Modal>
            <TouchableOpacity
                onPress={handleOpen}
                style={[styles.modalButtonContainer]}
            >
                <FontAwesome style={styles.modalButtonElement} name="map" />
                <Text style={styles.modalButtonElement}>Add trip</Text>
            </TouchableOpacity>
        </>
    );
};

export default AddTripModal;
