import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT, SHADES, SHADOWS } from "../../../../../constants";

const windowWidth = Dimensions.get("window").width;

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
    modalButtonContainer: {
        borderRadius: 60,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        borderWidth: 1,
        borderColor: SHADES.black04,
        width: "48%",
    },
    modalButtonElement: {
        color: SHADES.black04,
        fontSize: FONT.large,
    },
    tripButtonsDivision: {
        position: "absolute",
        top: 28,
        right: 8,
        zIndex: 1,
        gap: 8,
    },
});

export default styles;
