import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../../constants";

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: "25%",
        width: "50%",
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContent: {
        color: COLORS.white,
        fontWeight: "700",
        letterSpacing: 1.1,
    },
    detailsContainer: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: COLORS.white,
    },
    detailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    detailsHeaderElem: {
        fontSize: SIZES.medium,
        fontWeight: "600",
        color: COLORS.black,
    },
    detailsContent: {
        paddingHorizontal: 24,
        gap: 12,
        paddingBottom: 16,
    },
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
    },
});

export default styles;
