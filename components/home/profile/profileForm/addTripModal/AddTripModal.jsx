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
import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../../../../constants";
import PopupForm from "./popupForm/PopupForm";
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

    const handleOpen = () => setIsVisible(true);
    const handleClose = () => {
        dispatch(resetState());
        setIsVisible(false);
    };
    const handleConfirm = () => {
        const data = {
            title,
            type,
            withWhom,
            steps: tripData.steps,
        };
        if (
            data.title !== "" &&
            data.withWhom !== undefined &&
            data.type !== undefined
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
    // const [stepLocations, setStepLocations] = useState([]);

    // const handleStepLocation = (e, type) => {
    //     const { longitude, latitude } = e.nativeEvent.coordinate;
    //     const objData = {
    //         type,
    //         location: { longitude, latitude },
    //     };
    //     if (type === "arrival") {
    //         setStepLocations((state) => [...state, [objData]]);
    //     }
    //     if (type === "stopover" || type === "departure") {
    //         const currentState = [...stepLocations];
    //         const currentPortion = currentState[currentState.length - 1];
    //         const newPortion = [...currentPortion, objData];
    //         currentState.splice(currentState.length - 1, 1, newPortion);
    //         setStepLocations(currentState);
    //     }
    // };

    const tripData = useSelector(
        (state) => state.previousTripReducer.previousTripData
    );
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
        // handleStepLocation(e, pinState);
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
        // console.log('data')
        // console.log(data)
        const arrivalIndex = tripData.steps.findIndex(
            (el) => el.type === "arrival"
        );
        if (
            arrivalIndex !== -1 &&
            tripData.steps[arrivalIndex].date > data.date
        ) {
            alert("The date you gave is before your arrival");
        } else {
            dispatch(pushTripSteps(data));
            resetFormState();
            handlePinState("");
        }
    };

    return {
        arrivalLocation,
        departureLocation,
        stopoverLocation,
        // stepLocations,
        formState,
        handleLongPress,
        handlePinColor,
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
        departureLocation,
        stopoverLocation,
        // stepLocations,
        formState,
        handleLongPress,
        handlePinColor,
        handlePinState,
        handleTripSteps,
    } = useMapPins();
    const previousTripData = useSelector(
        (state) => state.previousTripReducer.previousTripData
    );
    const [selectedMarker, setSelectedMarker] = useState("");
    useEffect(() => {
        console.log(selectedMarker);
    }, [selectedMarker]);

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
                    >
                        {previousTripData.steps.length !== 0 &&
                            previousTripData.steps.map((step, index) => (
                                <Marker
                                    key={`marker-${index}`}
                                    coordinate={step.location}
                                    pinColor={handlePinColor(step.type)}
                                    onPress={() => setSelectedMarker(step)}
                                />
                            ))}
                    </MapView>
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
                            // stepLocations={stepLocations}
                            handleTripSteps={handleTripSteps}
                        />
                    )}
                    <DetailsContainer
                        isPopupVisible={isPopupVisible}
                        title={title}
                        type={type}
                        withWhom={withWhom}
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
