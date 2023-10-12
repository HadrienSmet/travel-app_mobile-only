import { StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS } from "../../../../../../constants";

const styles = StyleSheet.create({
    detailsButtonRow: { alignItems: "flex-end", marginBottom: 12 },
    markerDetails: {
        position: "absolute",
        gap: 12,
        padding: 24,
        paddingTop: 12,
        backgroundColor: COLORS.white,
        width: "100%",
        bottom: 0,
        ...SHADOWS.medium,
    },
    detailsContent: {
        paddingHorizontal: 12,
        color: SHADES.black06,
        textAlign: "center",
        width: "100%",
    },
    detailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    mainContent: {
        color: COLORS.black,
        fontWeight: "700",
    },
    toUppercase: { textTransform: "uppercase" },
});

export default styles;
