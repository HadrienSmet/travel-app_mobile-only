import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES, SHADOWS } from "../../../../../../constants";

const styles = StyleSheet.create({
    popupBasicDivision: {
        gap: 4,
    },
    popupButtonContainer: {
        width: "50%",
        marginHorizontal: "25%",
        paddingVertical: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 36,
    },
    popupButtonElement: {
        color: COLORS.white,
        fontWeight: "700",
        letterSpacing: 1.1,
        textAlign: "center",
    },
    popupContainer: {
        backgroundColor: COLORS.white,
        paddingVertical: 60,
        paddingHorizontal: 40,
        borderRadius: 8,
        gap: 16,
        width: "90%",
        ...SHADOWS.medium,
    },
    popupInputBox: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: SHADES.black07,
        borderRadius: 0,
        paddingVertical: 6,
    },
    popupInputElement: {
        color: SHADES.black06,
    },
    popupLayout: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 10,
        top: 0,
        left: 0,
        backgroundColor: SHADES.black04,
    },
    popupSecondTitle: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
});

export default styles;
