import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    Modal,
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { COLORS, SHADES, SHADOWS, SIZES } from "../../../../../constants";

const travellerTypeArray = [
    "Backpacker",
    "Biker",
    "Business",
    "Camper / Nature",
    "Jet-set",
    "Seasonal worker",
    "Sports",
    "Spring Break",
    "Tourism",
    "Van life",
    "Other",
];

const windowDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: windowDimensions.width,
        height: windowDimensions.height * 0.6,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        gap: 24,
        paddingHorizontal: windowDimensions.width / 6,
        ...SHADOWS.medium,
    },
    modalForm: {
        gap: 16,
    },
    questionDivision: {
        gap: 8,
    },
    closeIcon: {
        color: COLORS.black,
        fontSize: 24,
        position: "absolute",
        top: 20,
        right: 12,
    },
    modalTitle: {
        fontSize: SIZES.large,
        fontWeight: "700",
        color: COLORS.black,
    },
    modalQuestionText: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    onTravelOptions: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    onTravelOptionContainer: {
        backgroundColor: COLORS.black,
        width: "40%",
        paddingVertical: 8,
        borderRadius: 40,
    },
    onTravelOptionText: {
        color: COLORS.white,
        textAlign: "center",
    },
    modalConfirmButton: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 8,
        width: "100%",
        borderRadius: 40,
    },
    modalConfirmText: {
        color: COLORS.white,
        fontWeight: "700",
        textAlign: "center",
    },
    statusButtonOpacity: {
        zIndex: 2,
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%",
        transform: [{ translateY: 4 }],
    },
    statusButtonContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 120,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
    },
    statusButtonText: {
        fontSize: SIZES.small,
        fontWeight: "700",
        color: COLORS.white,
    },
});

const StatusModal = ({
    onTravel,
    setOnTravel,
    travellerType,
    setTravellerType,
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
                                        data={travellerTypeArray}
                                        setSelected={(val) =>
                                            setTravellerType(val)
                                        }
                                        save="value"
                                        label="Traveller type"
                                        search={false}
                                        boxStyles={{
                                            borderRadius: 0,
                                            borderWidth: 0,
                                            borderBottomWidth: 1,
                                            paddingTop: 0,
                                        }}
                                        // boxStyles={styles.listContainer}
                                        inputStyles={
                                            travellerType === undefined
                                                ? { color: SHADES.black04 }
                                                : { color: COLORS.black }
                                        }
                                        // dropdownStyles={styles.dropDownStyle}
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
                    <Text style={styles.statusButtonText}>Edit status</Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    );
};

export default StatusModal;
