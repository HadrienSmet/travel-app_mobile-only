import { StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS } from "../../../../../../constants";

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
    defaultColor: { color: SHADES.black06 },
    selectedColor: { color: COLORS.secondary },
});

export default styles;
