import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    componentContainer: {
        width: "100%",
        gap: 4,
    },
    titleStyle: {
        color: COLORS.black,
        fontSize: SIZES.large,
        fontWeight: "700",
        textAlign: "left",
        width: "100%",
    },
    listView: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: 48,
        width: "100%",
    },
    listContainer: {
        borderWidth: 0,
        paddingHorizontal: 0,
    },
    listElement: {
        color: COLORS.white,
    },
    userListStyle: {
        position: "absolute",
        left: 0,
    },
    iconStyle: {
        color: SHADES.black07,
        fontSize: 20,
        zIndex: 10,
        textAlign: "right",
    },
    dropDownStyle: {
        position: "absolute",
        top: 32,
        right: 0,
        zIndex: 10,
        width: windowWidth * 0.75,
        marginLeft: 0,
        backgroundColor: COLORS.white,
        height: 140,
    },
});

export default styles;
