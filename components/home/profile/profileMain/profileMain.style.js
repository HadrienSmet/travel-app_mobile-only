import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mainContainer: {
        height: windowHeight - 290,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
    },
    buttonStyle: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: COLORS.secondary,
        borderRadius: 60,
    },
    buttonTextStyle: {
        color: COLORS.white,
        fontWeight: "900",
        letterSpacing: 1.5,
    },
});

export default styles;
