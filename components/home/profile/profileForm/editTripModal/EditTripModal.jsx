import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TripForm from "../../../../common/tripForm/TripForm";
import styles from "./editTripModal.style";

const EditTripModal = ({ trip }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleConfirm = (
        tripTitle,
        tripType,
        tripWithWhom,
        tripTips,
        tripSteps
    ) => console.log(tripTitle, tripType, tripWithWhom, tripTips, tripSteps);

    useEffect(() => {
        if (isOpen) console.log(trip);
    }, [isOpen]);

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
