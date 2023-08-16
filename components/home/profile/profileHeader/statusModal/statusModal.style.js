import { StyleSheet, Dimensions } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../../constants";

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
    selectBox: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingTop: 0,
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
        bottom: -12,
        borderRadius: 120,
        transform: [{ translateX: 30 }, { translateY: -8 }],
    },
    statusButtonContainer: {
        width: 72,
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

export default styles;
