import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    headerContainer: { backgroundColor: COLORS.white },
    triangleContainer: {
        width: "120%",
        height: 35,
        backgroundColor: COLORS.white,
        position: "absolute",
        zIndex: 2,
        top: 0,
        left: 0,
        transform: [{ translateY: -20 }, { rotate: "-5deg" }],
    },
});

export default styles;
