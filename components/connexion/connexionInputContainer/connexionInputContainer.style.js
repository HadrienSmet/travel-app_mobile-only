import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
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
});

export default styles;
