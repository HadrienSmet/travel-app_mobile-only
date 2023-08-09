import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 20,
    },
    profilePicture: {
        width: "100%",
        height: windowHeight * 0.4,
        borderRadius: 8,
    },
    defaultArea: {
        width: "100%",
        backgroundColor: COLORS.white,
        height: windowHeight * 0.4,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    iconStyle: {
        fontSize: 116,
        color: SHADES.black04,
        zIndex: 10,
    },
    profilePictureButtonContainer: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: COLORS.white,
        borderRadius: 4,
        paddingBottom: 8,
        paddingTop: 8,
    },
    profilePictureButtonText: {
        color: COLORS.white,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "700",
    },
});

export default styles;
