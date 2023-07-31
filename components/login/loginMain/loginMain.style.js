import { StyleSheet, Dimensions } from "react-native";
import { SIZES, SHADES } from "../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    loginMain: {
        position: "relative",
        height: "100%",
        width: "100%",
    },
    loginBackgroundImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
    },
    loginContent: {
        zIndex: 2,
        position: "absolute",
        height: "100%",
        width: "100%",
        gap: 30,
        paddingLeft: windowWidth / 8,
        paddingRight: windowWidth / 8,
        backgroundColor: SHADES.white04,
        justifyContent: "center",
        alignItems: "center",
    },
    loginTitle: {
        fontSize: SIZES.large,
        fontWeight: "900",
        textAlign: "center",
    },
});

export default styles;
