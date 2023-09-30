import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    tripEventForm: {
        // paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        // minHeight: windowHeight * 0.5,
    },
    mainTitle: {
        fontWeight: "700",
        fontSize: SIZES.medium,
        color: COLORS.black,
        textAlign: "center",
    },
    secondTitle: { color: COLORS.black, fontWeight: "500" },
    basicView: { width: "100%" },
    textareaStyle: {
        verticalAlign: "top",
        backgroundColor: COLORS.white,
        borderRadius: 8,
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
