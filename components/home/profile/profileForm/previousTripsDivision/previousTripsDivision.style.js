import { StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS, SIZES } from "../../../../../constants";

const styles = StyleSheet.create({
    fieldDivision: { width: "100%", gap: 4 },
    titleContainer: {
        color: COLORS.black,
        fontSize: SIZES.large,
        fontWeight: "700",
        textAlign: "left",
        width: "100%",
    },
    previousTripCard: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: SHADES.black04,
        borderRadius: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.white,
        ...SHADOWS.medium,
    },
    previousTripButtons: { flexDirection: "row", gap: 20 },
});

export default styles;
