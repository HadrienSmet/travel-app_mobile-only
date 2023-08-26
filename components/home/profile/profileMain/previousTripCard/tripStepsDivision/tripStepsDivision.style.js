import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../constants";

const styles = StyleSheet.create({
    rowDisplay: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    basicDivision: {
        borderTopWidth: 1,
        borderColor: SHADES.black02,
        marginHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
    },
    tripScdTitle: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: SHADES.black06,
    },
    stepsContainer: {
        gap: 8,
    },
    stepTitle: {
        fontWeight: "700",
        color: COLORS.black,
    },
    stepBorderBottom: {
        borderBottomWidth: 1,
        borderColor: SHADES.black02,
        paddingBottom: 8,
    },
    fadeElement: { color: SHADES.black06 },
    stepsButtonContainer: {
        backgroundColor: COLORS.primary,
        marginLeft: "40%",
        minWidth: "60%",
        paddingVertical: 8,
        borderRadius: 4,
    },
    stepsButtonElement: {
        color: COLORS.white,
        textAlign: "center",
    },
});

export default styles;
