import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    closeButtonElement: {
        fontSize: SIZES.large,
        color: COLORS.black,
    },
    closeButtonRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    detailsContainer: {
        position: "absolute",
        bottom: 0,
        backgroundColor: COLORS.white,
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 20,
        gap: 12,
        alignItems: "center",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 48,
    },
    headerContent: { color: COLORS.white },
    mainContainer: { width: "100%" },
    mainAuthor: {
        color: SHADES.black07,
        fontWeight: "700",
    },
    mainContent: {
        textAlign: "center",
        paddingHorizontal: 20,
    },
    votesContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    votesValue: { color: SHADES.black04 },
    votesView: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
