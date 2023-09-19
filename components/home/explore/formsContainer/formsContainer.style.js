import { StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../../constants";

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: "50%",
        marginHorizontal: "25%",
        paddingVertical: 12,
        borderRadius: 60,
        alignItems: "center",
    },
    buttonElement: {
        color: COLORS.white,
        fontWeight: "700",
        letterSpacing: 1.4,
    },
    formContainer: {
        position: "absolute",
        bottom: 0,

        width: "100%",
        height: "60%",

        paddingHorizontal: 16,
        paddingTop: 28,

        backgroundColor: COLORS.white,
    },
    inputContainer: {
        borderColor: SHADES.black06,
        borderRadius: 4,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    scrollContainer: { gap: 12 },
    selectBox: {
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: 1,
    },
    typeElement: {
        color: COLORS.black,
        fontWeight: "700",
    },
    placeholderColor: { color: SHADES.black06 },
    valueColor: { color: COLORS.black },
});

export default styles;
