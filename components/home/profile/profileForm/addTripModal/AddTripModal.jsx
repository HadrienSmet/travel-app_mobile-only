import { TouchableOpacity, Text, Modal, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserData } from "../../../../../features/userData.slice";
import {
    pushTripSteps,
    resetState,
} from "../../../../../features/previousTripData.slice";
import { axiosPushTrip } from "../../../../../utils/axios/user";

import FontAwesome from "@expo/vector-icons/FontAwesome5";

import styles from "./addTripModal.style";
import MapView from "react-native-maps";
import { COLORS } from "../../../../../constants";
import PopupForm from "../../../../common/tripForm/popupForm/PopupForm";
import StepForm from "./stepForm/StepForm";
import TripButtonsDivision from "./tripButtonsDivision/TripButtonsDivision";
import DetailsContainer from "./detailsContainer/DetailsContainer";

const usePopupForm = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState(undefined);
    const [withWhom, setWithWhom] = useState(undefined);
    const [isVisible, setIsVisible] = useState(false);

    const userData = useSelector((state) => state.userDataReducer.userData);
    const tripData = useSelector(
        (state) => state.previousTripReducer.previousTripData
    );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(tripData);
    }, [tripData]);

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

    useEffect(() => {
        const handlePopuDisplay = () => {
            if (title === "" || type === undefined || withWhom === undefined) {
                setPopupVisible(true);
            } else {
                setPopupVisible(false);
            }
        };
        handlePopuDisplay();
    }, [title, type, withWhom]);

    return {
        isPopupVisible,
        isVisible,
        title,
        type,
        withWhom,
        handleOpen,
        handleClose,
        handleConfirm,
        setTitle,
        setType,
        setWithWhom,
    };
};

const useMapPins = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState("");
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
        console.log("arrivalLocation");
        console.log(arrivalLocation);
    }, [arrivalLocation]);
    useEffect(() => {
        console.log("pinState");
        console.log(pinState);
    }, [pinState]);
    useEffect(() => {
        console.log("formState");
        console.log(formState);
    }, [formState]);

    const resetFormState = () => setFormState("");
    const handleFormState = (state) => setFormState(state);

    const handleArrival = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setArrivalLocation({ latitude, longitude });
        handleFormState("arrival");
    };
    const handleDeparture = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setDepartureLocation({ latitude, longitude });
        handleFormState("departure");
    };
    const handleStopover = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setStopoverLocation((state) => [...state, { latitude, longitude }]);
        handleFormState("stopover");
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
        resetFormState();
        handlePinState("");
    };

    return {
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        formState,
        handleLongPress,
        handlePinState,
        handleTripSteps,
    };
};

const AddTripModal = () => {
    const {
        isPopupVisible,
        isVisible,
        title,
        type,
        withWhom,
        handleOpen,
        handleClose,
        handleConfirm,
        setTitle,
        setType,
        setWithWhom,
    } = usePopupForm();
    const {
        arrivalLocation,
        stopoverLocation,
        departureLocation,
        formState,
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
                    <TripButtonsDivision handlePinState={handlePinState} />
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
                    {formState !== "" && (
                        <StepForm
                            formState={formState}
                            arrivalLocation={arrivalLocation}
                            departureLocation={departureLocation}
                            stopoverLocation={stopoverLocation}
                            handleTripSteps={handleTripSteps}
                        />
                    )}
                    <DetailsContainer
                        isPopupVisible={isPopupVisible}
                        title={title}
                        type={type}
                        withWhom={withWhom}
                    />
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
