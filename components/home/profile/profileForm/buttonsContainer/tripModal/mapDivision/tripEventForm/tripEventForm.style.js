import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    tripEventForm: {
        paddingHorizontal: 24,
        height: windowHeight - 428,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        borderRadius: 24,
    },
    mainTitle: {
        fontWeight: "700",
        fontSize: SIZES.medium,
        color: COLORS.white,
        textAlign: "center",
    },
    secondTitle: { color: COLORS.white, fontWeight: "500" },
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
        borderColor: COLORS.white,
        borderWidth: 1,
    },
    confirmButtonContent: { color: COLORS.white, textAlign: "center" },
});

export default styles;