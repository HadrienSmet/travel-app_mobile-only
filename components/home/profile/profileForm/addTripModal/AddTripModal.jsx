import { TouchableOpacity, Text, Modal, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserData } from "../../../../../features/userData.slice";
import { pushStep, resetTrip } from "../../../../../features/tripData.slice";
import { axiosPushTrip } from "../../../../../utils/axios/user";

import FontAwesome from "@expo/vector-icons/FontAwesome5";

import styles from "./addTripModal.style";
import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../../../../constants";
import PopupForm from "./popupForm/PopupForm";
import StepForm from "./stepForm/StepForm";
import TripButtonsDivision from "./tripButtonsDivision/TripButtonsDivision";
import DetailsContainer from "./detailsContainer/DetailsContainer";
import MapPin from "../../../../common/mapPin/MapPin";
import MapContainer from "./mapContainer/MapContainer";

const useTripModal = () => {
    const [isPopupVisible, setPopupVisible] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    const userData = useSelector((state) => state.userDataReducer.userData);
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    const { color, steps, title, type, withWhom } = tripData;
    const dispatch = useDispatch();

    const closePopup = () => setPopupVisible(false);
    const handleOpen = () => setIsVisible(true);
    const handleClose = () => {
        dispatch(resetTrip());
        setIsVisible(false);
    };
    const handleConfirm = () => {
        const data = {
            color,
            title,
            type,
            withWhom,
            steps,
        };
        if (
            color !== undefined &&
            title !== undefined &&
            withWhom !== undefined &&
            type !== undefined
        ) {
            axiosPushTrip(userData._id, data, userData.token)
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
        isPopupVisible,
        isVisible,
        closePopup,
        handleOpen,
        handleClose,
        handleConfirm,
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

    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    useEffect(() => {
        console.log(tripData);
    }, [tripData]);

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
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        pinState,
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
        closePopup,
        handleOpen,
        handleClose,
        handleConfirm,
    } = useTripModal();
    const {
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        pinState,
        formState,
        handleLongPress,
        handlePinState,
        handleTripSteps,
    } = useMapPins();
    const tripData = useSelector((state) => state.tripDataReducer.tripData);

    return (
        <>
            <Modal
                visible={isVisible}
                animationType="slide"
                onRequestClose={() => handleClose()}
            >
                <View>
                    <MapContainer handleLongPress={handleLongPress} />
                    <View style={styles.backButtonDivision}>
                        <TouchableOpacity
                            onPress={handleClose}
                            style={styles.buttonContainer}
                        >
                            <FontAwesome name="arrow-left" />
                        </TouchableOpacity>
                    </View>
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
                        isPopupVisible={isPopupVisible}
                        handleConfirm={handleConfirm}
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
