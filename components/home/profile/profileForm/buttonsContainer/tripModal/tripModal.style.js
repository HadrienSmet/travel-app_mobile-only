import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT, SHADES } from "../../../../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
    },
    modalContentContainer: {
        paddingVertical: 16,
        paddingHorizontal: windowWidth / 12,
        backgroundColor: COLORS.white,
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
