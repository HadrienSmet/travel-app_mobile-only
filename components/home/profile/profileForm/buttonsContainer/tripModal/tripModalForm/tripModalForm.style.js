import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS, SIZES } from "../../../../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    formStyle: { gap: 8, height: windowHeight - 200 },
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
        marginBottom: 50,
    },
    addTripBtnContent: {
        color: COLORS.white,
        textTransform: "uppercase",
        letterSpacing: -0.5,
        textAlign: "center",
    },
});

export default styles;
