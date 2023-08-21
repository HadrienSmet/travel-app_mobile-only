import { StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS, SIZES } from "../../../../../../../constants";

const styles = StyleSheet.create({
    formStyle: { gap: 8 },
    modalSecondTitle: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    modalBasicDivision: {
        gap: 4,
    },
    modalInputBox: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: SHADES.black07,
        borderRadius: 0,
    },
    modalInputElement: {
        color: SHADES.black06,
    },
    addTrippBtnContainer: {
        marginHorizontal: "10%",
        backgroundColor: COLORS.secondary,
        width: "80%",
        paddingVertical: 8,
        borderRadius: 60,
        ...SHADOWS.medium,
    },
    addTripBtnContent: {
        color: COLORS.white,
        textTransform: "uppercase",
        letterSpacing: -0.5,
        textAlign: "center",
    },
});

export default styles;
