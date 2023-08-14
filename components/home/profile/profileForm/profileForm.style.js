import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS } from "../../../../constants";

const windowDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: windowDimensions.width / 8,
        paddingVertical: 24,
        backgroundColor: COLORS.white,
        height: windowDimensions.height - 306,
    },
    inputBorder: { borderWidth: 1, borderColor: SHADES.black04 },
});

export default styles;
