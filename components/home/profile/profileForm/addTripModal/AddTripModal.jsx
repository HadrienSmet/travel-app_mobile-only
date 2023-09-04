import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserData } from "../../../../../features/userData.slice";
import { axiosPushTrip } from "../../../../../utils/axios/user/axiosPushTrip";

import { TouchableOpacity, Text, Modal, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TripModalHeader from "./tripModalHeader/TripModalHeader";
import TripForm from "../../../../common/tripForm/TripForm";

import styles from "./addTripModal.style";

const useAddTripModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const userData = useSelector((state) => state.newUserData.userData);
    const dispatch = useDispatch();

    const handleOpen = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);

    const handleConfirm = (
        tripTitle,
        tripType,
        tripWithWhom,
        tripTips,
        tripSteps
    ) => {
        const data = {
            title: tripTitle,
            type: tripType,
            withWhom: tripWithWhom,
            tips: tripTips,
            steps: tripSteps,
        };
        if (
            tripTitle !== "" &&
            tripWithWhom !== undefined &&
            tripType !== undefined
        ) {
            axiosPushTrip(userData.userId, data, userData.token)
                .then(() => {
                    const dispatchData = {
                        previousTrips: [...userData.previousTrips, data],
                    };
                    dispatch(setUserData(dispatchData));
                    handleClose();
                })
                .catch((err) => console.log(err));
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

const AddTripModal = () => {
    const { isVisible, handleOpen, handleClose, handleConfirm } =
        useAddTripModal();

    return (
        <>
            <Modal
                visible={isVisible}
                animationType="slide"
                onRequestClose={() => handleClose()}
                style={styles.modalStyle}
            >
                <View style={styles.modalContentContainer}>
                    <TripModalHeader handleClose={handleClose} />
                    <TripForm handleConfirm={handleConfirm} />
                </View>
            </Modal>
            <TouchableOpacity
                onPress={handleOpen}
                style={[styles.basicContainerStyle, styles.buttonContainer]}
            >
                <FontAwesome style={styles.buttonElement} name="map" />
                <Text style={styles.buttonElement}>Add trip</Text>
            </TouchableOpacity>
        </>
    );
};

export default AddTripModal;
