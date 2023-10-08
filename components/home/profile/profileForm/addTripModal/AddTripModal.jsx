import { TouchableOpacity, Text, Modal, View } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushStep, resetTrip } from "../../../../../features/tripData.slice";

import FontAwesome from "@expo/vector-icons/FontAwesome5";

import styles from "./addTripModal.style";
import PopupForm from "./popupForm/PopupForm";
import StepForm from "./stepForm/StepForm";
import TripButtonsDivision from "./tripButtonsDivision/TripButtonsDivision";
import DetailsContainer from "./detailsContainer/DetailsContainer";
import MapContainer from "./mapContainer/MapContainer";
import BackButton from "./backButton/BackButton";

const useTripModal = () => {
    const [isPopupVisible, setPopupVisible] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();

    const closePopup = () => setPopupVisible(false);
    const handleOpen = () => setIsVisible(true);
    const handleClose = () => {
        dispatch(resetTrip());
        setIsVisible(false);
    };

    return {
        isPopupVisible,
        isVisible,
        closePopup,
        handleOpen,
        handleClose,
    };
};

const useMapPins = () => {
    const dispatch = useDispatch();
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    const [areDetailsVisible, setDetailsVisible] = useState(false);
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

    const toggleDetails = () => setDetailsVisible((state) => !state);
    const hideDetails = () => setDetailsVisible(false);
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
    const handlePinState = (state) => setPinState(state);

    const handleLongPress = (e) => {
        hideDetails();
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
        const lastStep = tripData.steps[tripData.steps.length - 1];
        if (tripData.steps.length > 0 && lastStep.date > data.date) {
            alert("The date you gave is before the last event you defined");
        } else {
            dispatch(pushStep(data));
            resetFormState();
            handlePinState("");
        }
    };

    return {
        areDetailsVisible,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        pinState,
        formState,
        handleLongPress,
        handlePinState,
        handleTripSteps,
        toggleDetails,
    };
};

const AddTripModal = () => {
    const { isPopupVisible, isVisible, closePopup, handleOpen, handleClose } =
        useTripModal();
    const {
        areDetailsVisible,
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        pinState,
        formState,
        handleLongPress,
        handlePinState,
        handleTripSteps,
        toggleDetails,
    } = useMapPins();

    return (
        <>
            <Modal
                visible={isVisible}
                animationType="slide"
                onRequestClose={() => handleClose()}
            >
                <View>
                    <MapContainer handleLongPress={handleLongPress} />
                    <BackButton handleClose={handleClose} />
                    <TripButtonsDivision
                        pinState={pinState}
                        handlePinState={handlePinState}
                    />
                    {isPopupVisible && <PopupForm closePopup={closePopup} />}
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
                        areDetailsVisible={areDetailsVisible}
                        isPopupVisible={isPopupVisible}
                        handleClose={handleClose}
                        toggleDetails={toggleDetails}
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
