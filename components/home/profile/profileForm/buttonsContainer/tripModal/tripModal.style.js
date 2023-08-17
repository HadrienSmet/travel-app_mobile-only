import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT, SHADES, SIZES } from "../../../../../../constants";

const windowDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    modalContentContainer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: windowDimensions.width / 12,
        paddingVertical: windowDimensions.height / 24,
        gap: 16,
        flex: 1,
    },
    closingIconRow: {
        width: "100%",
        alignItems: "flex-end",
    },
    closingIcon: {
        fontSize: 20,
        color: COLORS.black,
    },
    modalMainTitle: {
        fontSize: SIZES.large,
        textAlign: "center",
    },
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
        borderColor: COLORS.black,
        borderRadius: 0,
    },
    modalInputElement: {
        color: SHADES.black06,
    },
    basicContainerStyle: {
        borderRadius: 60,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: SHADES.black04,
        width: "48%",
    },
    buttonElement: {
        color: SHADES.black04,
        fontSize: FONT.large,
    },
});

export default styles;
