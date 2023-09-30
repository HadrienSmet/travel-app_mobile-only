import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mainTitle: {
        fontWeight: "700",
        fontSize: SIZES.medium,
        color: COLORS.black,
        textAlign: "center",
    },
    stepForm: {
        position: "absolute",
        bottom: 53,
        width: "100%",
        height: windowHeight * 0.5,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        paddingTop: 24,
        backgroundColor: COLORS.white,
        paddingHorizontal: 32,
    },
    tripEventForm: {
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    secondTitle: { color: COLORS.black, fontWeight: "500" },
    basicView: { width: "100%" },
    textareaStyle: {
        verticalAlign: "top",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: SHADES.black04,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    confirmButtonContainer: {
        width: "60%",
        paddingVertical: 8,
        borderRadius: 40,
        borderColor: COLORS.primary,
        borderWidth: 1,
    },
    confirmButtonContent: { color: COLORS.primary, textAlign: "center" },
});

export default styles;
