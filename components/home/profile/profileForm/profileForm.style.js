import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS, SIZES } from "../../../../constants";

const windowDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: windowDimensions.width / 8,
        paddingVertical: 24,
        backgroundColor: COLORS.white,
        // height: windowDimensions.height - 306,
        // flex: 1,
    },
    fieldDivision: { width: "100%", gap: 4 },
    titleContainer: {
        color: COLORS.black,
        fontSize: SIZES.large,
        fontWeight: "700",
        textAlign: "left",
        width: "100%",
    },
    inputBorder: { borderWidth: 1, borderColor: SHADES.black04 },
    textareaStyle: {
        borderWidth: 1,
        borderColor: SHADES.black06,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: SHADES.black06,
        width: "100%",
    },
});

export default styles;
