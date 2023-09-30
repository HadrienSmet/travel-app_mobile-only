import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
    popupSecondTitle: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    popupBasicDivision: {
        gap: 4,
    },
    popuInputBox: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: SHADES.black07,
        borderRadius: 0,
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
    popupContainer: {
        backgroundColor: COLORS.white,
        paddingVertical: 60,
        paddingHorizontal: 40,
        borderRadius: 8,
        gap: 16,
        ...SHADOWS.medium,
    },
});

export default styles;
