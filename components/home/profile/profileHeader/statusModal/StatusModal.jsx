import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { travelerTypeArray } from "../../../../../data/travelerTypeArray";

import { COLORS, SHADES } from "../../../../../constants";
import styles from "./statusModal.style";

const StatusModal = ({
    onTravel,
    setOnTravel,
    travelerType,
    setTravelerType,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleOnTravel = () => setOnTravel(true);
    const handleAtHome = () => setOnTravel(false);
    return (
        <>
            <Modal
                visible={isOpen}
                animationType="slide"
                transparent={true}
                onRequestClose={() => handleClose()}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FontAwesome
                            onPress={handleClose}
                            style={styles.closeIcon}
                            name="times"
                        />
                        <Text style={styles.modalTitle}>
                            Edit your traveler status
                        </Text>
                        <View style={styles.modalForm}>
                            <View style={styles.questionDivision}>
                                <Text style={styles.modalQuestionText}>
                                    Are you travelling?
                                </Text>
                                <View style={styles.onTravelOptions}>
                                    <TouchableOpacity
                                        style={styles.onTravelOptionContainer}
                                    >
                                        <Text
                                            style={styles.onTravelOptionText}
                                            onPress={handleOnTravel}
                                        >
                                            Yes
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.onTravelOptionContainer}
                                    >
                                        <Text
                                            style={styles.onTravelOptionText}
                                            onPress={handleAtHome}
                                        >
                                            No
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {onTravel && (
                                <View style={styles.questionDivision}>
                                    <Text style={styles.modalQuestionText}>
                                        What kind of trip?
                                    </Text>
                                    <SelectList
                                        data={travelerTypeArray}
                                        setSelected={(val) =>
                                            setTravelerType(val)
                                        }
                                        save="value"
                                        label="Traveller type"
                                        search={false}
                                        boxStyles={styles.selectBox}
                                        inputStyles={
                                            travelerType === undefined
                                                ? { color: SHADES.black04 }
                                                : { color: COLORS.black }
                                        }
                                    />
                                </View>
                            )}
                        </View>
                        <TouchableOpacity
                            style={styles.modalConfirmButton}
                            onPress={handleClose}
                        >
                            <Text style={styles.modalConfirmText}>
                                Confirmer
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={handleOpen}
                style={styles.statusButtonOpacity}
            >
                <LinearGradient
                    style={styles.statusButtonContainer}
                    colors={[COLORS.secondary, COLORS.tertiary]}
                >
                    <Text style={styles.statusButtonText}>
                        {onTravel ? "On Travel" : "Edit status"}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    );
};

export default StatusModal;
