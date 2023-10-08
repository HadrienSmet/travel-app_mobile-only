import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../../../../../constants";

const styles = StyleSheet.create({
    backButtonDivision: {
        position: "absolute",
        top: 28,
        left: 8,
        zIndex: 1,
    },
    buttonContainer: {
        backgroundColor: COLORS.white,
        width: 48,
        height: 48,
        borderRadius: 48,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.medium,
    },
});

export default styles;
