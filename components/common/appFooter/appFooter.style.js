import { StyleSheet } from "react-native";
import { SHADES } from "../../../constants";

const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 16,
    },
    footerBefore: {
        position: "absolute",
        left: 0,
        top: -16,
        width: "100%",
        height: 1,
        backgroundColor: SHADES.black02,
    },
    footerElement: {
        fontSize: 20,
    },
});

export default styles;
