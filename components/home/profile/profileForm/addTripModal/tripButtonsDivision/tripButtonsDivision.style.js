import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../../../../../constants";

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.white,
        width: 48,
        height: 48,
        borderRadius: 48,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.medium,
    },
    tripButtonsDivision: {
        position: "absolute",
        top: 28,
        right: 8,
        zIndex: 1,
        gap: 8,
    },
    arrivalColor: { color: COLORS.primary },
    stopoverColor: { color: COLORS.secondary },
    departureColor: { color: COLORS.tertiary },
});

export default styles;
