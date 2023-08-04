import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants";
// import { SIZES, SHADES, FONT, COLORS } from "../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    profilePictureMain: {
        position: "relative",
        height: "100%",
        width: "100%",
    },
    profilePictureBackgroundImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
    },
    profilePictureContent: {
        zIndex: 2,
        position: "absolute",
        height: "100%",
        width: "100%",
        gap: 35,
        paddingLeft: windowWidth / 8,
        paddingRight: windowWidth / 8,
        backgroundColor: SHADES.orange065,
        justifyContent: "center",
        alignItems: "center",
    },
    profilePictureTitle: {
        fontFamily: "Cookie_400Regular",
        fontSize: SIZES.xLarge,
        color: COLORS.white,
        fontWeight: "900",
        textAlign: "center",
    },
    profilePictureSubTitle: {
        color: COLORS.white,
        textAlign: "center",
    },
});

export default styles;
