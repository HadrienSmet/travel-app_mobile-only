import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 35,
    },
    loginInputsContainer: {
        width: "100%",
        gap: 8,
    },
    passwordView: {
        width: "100%",
    },
    forgetPasswordText: {
        color: COLORS.primary,
        textAlign: "right",
        fontWeight: "bold",
    },
    loginButtonContainer: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 8,
        borderRadius: 4,
    },
    loginButtonText: {
        color: COLORS.white,
        fontWeight: "700",
    },
});

export default styles;
