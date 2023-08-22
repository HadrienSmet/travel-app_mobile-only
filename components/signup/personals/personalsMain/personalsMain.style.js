import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    personalsMain: {
        position: "relative",
        height: "100%",
        width: "100%",
    },
    personalsBackgroundImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
    },
    personalsContent: {
        zIndex: 2,
        position: "absolute",
        minHeight: "100%",
        // height: "100%",
        width: "100%",
        gap: 24,
        paddingVertical: 40,
        paddingLeft: windowWidth / 8,
        paddingRight: windowWidth / 8,
        backgroundColor: SHADES.orange055,
        justifyContent: "center",
        alignItems: "center",
    },
    personalsTitle: {
        fontFamily: "Cookie_400Regular",
        fontSize: SIZES.xLarge,
        color: COLORS.white,
        fontWeight: "900",
        textAlign: "center",
    },
    personalsSubTitle: {
        color: COLORS.white,
        textAlign: "center",
    },
});

export default styles;
