import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TripForm from "../../../../common/tripForm/TripForm";
import styles from "./editTripModal.style";
import { useDispatch, useSelector } from "react-redux";
import { setUserPreviousTrips } from "../../../../../features/userData.slice";
import { resetTrip } from "../../../../../features/tripData.slice";
import { axiosPatchTrips } from "../../../../../utils/axios/user";

const EditTripModal = ({ trip }) => {
    const userData = useSelector((state) => state.userDataReducer.userData);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        dispatch(resetTrip());
        setIsOpen(false);
    };
    const handleConfirm = (prevTrip) => {
        if (
            prevTrip.title !== "" &&
            prevTrip.withWhom !== undefined &&
            prevTrip.type !== undefined
        ) {
            axiosPatchTrips(userData._id, prevTrip, userData.token)
                .then(() => {
                    const data = [...userData.previousTrips];
                    const oldIndex = data.findIndex(
                        (trip) => trip.title === prevTrip.title
                    );
                    data.splice(oldIndex, 1, prevTrip);
                    dispatch(setUserPreviousTrips(data));
                    closeModal();
                })
                .catch((err) => alert(err));
        } else {
            alert(
                "Need to define a title, a type and to share with whom you traveled with"
            );
        }
    };

    return (
        <>
            <Modal style={styles.modalStyle} visible={isOpen}>
                <View style={styles.modalContentContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={closeModal}>
                            <FontAwesome
                                style={styles.closingIcon}
                                name="times"
                            />
                        </TouchableOpacity>
                        <Text style={styles.modalMainTitle}>
                            Edit {trip.title}
                        </Text>
                    </View>
                    <TripForm handleConfirm={handleConfirm} trip={trip} />
                </View>
            </Modal>
            <TouchableOpacity onPress={openModal}>
                <FontAwesome name="edit" />
            </TouchableOpacity>
        </>
    );
};

export default EditTripModal;
