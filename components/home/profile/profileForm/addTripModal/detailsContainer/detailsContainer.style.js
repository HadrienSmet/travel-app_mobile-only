import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../../../constants";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    detailsContainer: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: COLORS.white,
    },
    detailsMaxHeight: { maxHeight: height * 0.6 },
});

export default styles;
