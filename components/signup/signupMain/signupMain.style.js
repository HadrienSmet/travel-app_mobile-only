import { StyleSheet, Dimensions } from "react-native";
import { SIZES, SHADES, FONT, COLORS } from "../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    signupMain: {
        position: "relative",
        height: "100%",
        width: "100%",
    },
    signupBackgroundImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
    },
    signupContent: {
        zIndex: 2,
        position: "absolute",
        height: "100%",
        width: "100%",
        gap: 75,
        paddingLeft: windowWidth / 8,
        paddingRight: windowWidth / 8,
        backgroundColor: SHADES.orange04,
        justifyContent: "center",
        alignItems: "center",
    },
    signupTitle: {
        fontFamily: "Cookie_400Regular",
        fontSize: SIZES.xLarge,
        color: COLORS.white,
        fontWeight: "900",
        textAlign: "center",
    },
    signupSubTitle: {
        width: "100%",
        color: COLORS.white,
        textAlign: "left",
    },
});

export default styles;
