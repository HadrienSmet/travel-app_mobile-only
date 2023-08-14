import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADES, SIZES } from "../../../../../constants";

const styles = StyleSheet.create({
    buttonsDivision: { width: "100%", gap: 16 },
    basicContainerStyle: {
        borderRadius: 60,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: SHADES.black04,
        width: "48%",
    },
    buttonElement: {
        color: SHADES.black04,
        fontSize: FONT.large,
    },
    confirmContainer: {
        width: "100%",
        backgroundColor: COLORS.primary,
    },
    confirmElement: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        textTransform: "uppercase",
        fontWeight: "700",
    },
});

export default styles;
