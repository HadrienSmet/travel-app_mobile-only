import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../constants/index";

const styles = StyleSheet.create({
    tripContainer: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: SHADES.black06,
        borderRadius: 8,
    },
    rowDisplay: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    triptitle: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: COLORS.black,
    },
    tripScdTitle: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: SHADES.black06,
    },
    angleIcon: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    basicDivision: {
        gap: 12,
    },
    stepsContainer: {
        gap: 8,
    },
    stepTitle: {
        fontWeight: "700",
        color: COLORS.black,
    },
    fadeElement: { color: SHADES.black06 },
    stepsButtonContainer: {
        backgroundColor: COLORS.primary,
        marginHorizontal: "20%",
        minWidth: "60%",
        paddingVertical: 8,
        borderRadius: 60,
    },
    stepsButtonElement: {
        color: COLORS.white,
        textAlign: "center",
    },
});

export default styles;
