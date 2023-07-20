import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
    },
    questionText: {
        fontSize: SIZES.small,
        color: COLORS.gray,
        fontFamily: FONT.regular,
    },
    linkText: {
        fontSize: SIZES.small,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
});

export default styles;
