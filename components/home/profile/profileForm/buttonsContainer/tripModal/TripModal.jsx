import { useState } from "react";
import { TouchableOpacity, Text, Modal, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./tripModal.style";
import TripModalHeader from "./tripModalHeader/TripModalHeader";
import TripModalForm from "./tripModalForm/TripModalForm";

const TripModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);

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
                    <TripModalForm handleClose={handleClose} />
                </View>
            </Modal>
            <TouchableOpacity
                onPress={handleOpen}
                style={[styles.basicContainerStyle, styles.buttonContainer]}
            >
                <FontAwesome style={styles.buttonElement} name="map" />
                <Text style={styles.buttonElement}>Edit trips</Text>
            </TouchableOpacity>
        </>
    );
};

export default TripModal;
