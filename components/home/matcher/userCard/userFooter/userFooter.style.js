import { StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../../../constants";

const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingTop: 12,
        paddingBottom: 36,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: SHADES.black04,
    },
    footerElement: {
        color: COLORS.white,
        fontSize: 20,
    },
});

export default styles;
