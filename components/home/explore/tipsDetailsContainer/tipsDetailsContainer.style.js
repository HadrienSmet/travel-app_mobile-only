import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    closeButtonElement: {
        fontSize: SIZES.large,
        color: COLORS.black,
    },
    closeButtonRow: {
        position: "absolute",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16,
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
    mainContainer: {
        width: "100%",
        gap: 8,
    },
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
        gap: 24,
    },
    votesValue: { color: SHADES.black04 },
    votesView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
});

export default styles;
