import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS, SIZES } from "../../../../../constants/index";

const windowWidth = Dimensions.get("window").height;

const styles = StyleSheet.create({
    tripContainer: {
        // paddingHorizontal: 16,
        // paddingVertical: 12,
        overflow: "hidden",
        // borderWidth: 1,
        // borderColor: SHADES.black06,
        borderRadius: 8,
        minWidth: "100%",
        ...SHADOWS.medium,
    },
    rowDisplay: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerStyle: {
        paddingVertical: 8,
        width: "100%",
        // paddingHorizontal: windowWidth / 10,
    },
    triptitle: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: COLORS.white,
    },
    tripScdTitle: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: SHADES.black06,
    },
    angleIcon: {
        fontSize: SIZES.large,
        color: COLORS.white,
        fontWeight: "900",
    },
    basicDivision: {
        gap: 12,
        backgroundColor: COLORS.white,
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
