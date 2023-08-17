import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    inputsContainer: {
        flexDirection: "row",
        gap: 24,
        // justifyContent: "space-around"
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 0,
        paddingHorizontal: 12,
        paddingVertical: 0,
    },
    fadeElement: { color: SHADES.black06 },
    strongElement: { color: COLORS.black },
});

export default styles;
