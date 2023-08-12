import { StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS } from "../../../../constants/index";

const styles = StyleSheet.create({
    buttonsContainer: {
        position: "relative",
        transform: [{ translateY: -30 }],
        flexDirection: "row",
        gap: 24,
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        borderColor: SHADES.black02,
        borderWidth: 1,
        ...SHADOWS.medium,
    },
    iconStyle: {
        fontSize: 32,
    },
});

export default styles;
