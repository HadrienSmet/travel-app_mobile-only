import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants";
// import { COLORS, SIZES, FONT } from "../../../../../constants";

const styles = StyleSheet.create({
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 8,
    },
    personalsInputsContainer: {
        width: "100%",
        gap: 4,
    },
    iconsContainer: {
        position: "absolute",
        height: "100%",
        justifyContent: "center",
        left: 0,
        transform: [{ translateX: -25 }],
    },
    iconStyle: {
        fontSize: 20,
        color: COLORS.white,
        position: "absolute",
    },
    messageStyle: {
        color: COLORS.white,
        textAlign: "center",
        fontSize: SIZES.small,
    },
    flatListStyle: {
        height: 48,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 16.5,
        backgroundColor: COLORS.white,
        borderRadius: 4,
        borderWidth: 0,
        alignItems: "center",
    },
    dropDownStyle: {
        position: "absolute",
        top: 48,
        zIndex: 10,
        width: "100%",
        backgroundColor: COLORS.white,
        borderWidth: 0,
        borderRadius: 4,
    },
    labelStyle: {
        color: SHADES.black04,
    },
    itemStyle: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    personalsButtonContainer: {
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: COLORS.white,
    },
    personalsButtonText: {
        color: COLORS.white,
        fontWeight: "700",
    },
});

export default styles;
