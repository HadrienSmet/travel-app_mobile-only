import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: 0,
        height: 40,
        width: "100%",
        padding: 8,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 15,
    },
    questionText: {
        fontSize: SIZES.small,
        color: COLORS.gray,
        fontFamily: FONT.regular,
    },
    linkText: {
        zIndex: 10,
        fontSize: SIZES.small,
        fontFamily: FONT.bold,
    },
});

export default styles;
