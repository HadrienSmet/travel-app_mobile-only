import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 55,
    },
    signupInputsContainer: {
        width: "100%",
        gap: 12,
    },
    iconsContainer: {
        position: "absolute",
        height: "100%",
        justifyContent: "center",
        left: 0,
        transform: [{ translateX: -25 }],
    },
    iconStyle: {
        fontSize: 20,
        color: COLORS.white,
        position: "absolute",
    },
    messageStyle: {
        color: COLORS.white,
        textAlign: "center",
        fontSize: SIZES.small,
    },
    passwordView: {
        width: "100%",
        gap: 8,
    },
    passwordSecurityBar: {
        width: "100%",
        height: 7,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.white,
        overflow: "hidden",
    },
    signupButtonContainer: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    signupButtonText: {
        color: COLORS.white,
        fontWeight: "700",
    },
});

export default styles;
