import { StyleSheet } from "react-native";
import { SHADES } from "../../../constants";

const styles = StyleSheet.create({
    footerContainer: {
        position: "fixed",
        // width: "100%",
        height: 60,
        left: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // paddingVertical: 16,
    },
    footerBefore: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: 1,
        backgroundColor: SHADES.black02,
    },
    footerElement: {
        fontSize: 20,
    },
});

export default styles;
