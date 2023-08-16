import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mainContainer: {
        height: windowHeight - 328,
        paddingHorizontal: windowWidth / 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: COLORS.white,
    },
    profileText: {
        width: "100%",
        color: COLORS.black,
        textAlign: "center",
    },
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    pageElementColor: {
        color: COLORS.black,
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
