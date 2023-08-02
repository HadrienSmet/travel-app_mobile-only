import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    headerContainer: { backgroundColor: COLORS.white },
    triangleContainer: {
        width: windowWidth * 2,
        height: 50,
        backgroundColor: COLORS.white,
        position: "absolute",
        zIndex: 5,
        top: 0,
        left: 0,
    },
});

export default styles;
