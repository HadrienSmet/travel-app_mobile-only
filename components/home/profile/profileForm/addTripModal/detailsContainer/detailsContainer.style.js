import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../constants";

const styles = StyleSheet.create({
    borderBottom: {
        width: "60%",
        marginHorizontal: "20%",
        borderBottomWidth: 1,
        borderColor: SHADES.black02,
    },
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
    detailsContent: {
        paddingHorizontal: 24,
        gap: 12,
        paddingBottom: 16,
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
    detailsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
    },
    stepContainer: {
        gap: 8,
        paddingVertical: 8,
    },
    stepContent: {
        color: COLORS.black,
        width: "75%",
        marginHorizontal: "12.5%",
        textAlign: "center",
    },
    setpHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    stepType: {
        fontWeight: "700",
        color: SHADES.black07,
        letterSpacing: 1.1,
    },
    stepsContainer: {
        gap: 12,
        marginBottom: 12,
    },
});

export default styles;
