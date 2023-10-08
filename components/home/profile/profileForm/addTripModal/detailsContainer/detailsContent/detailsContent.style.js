import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../../constants";

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
    detailsContent: {
        flex: 1,
        paddingBottom: 16,
    },
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
    },
    scrollContent: { paddingHorizontal: 24, gap: 12 },
});

export default styles;
