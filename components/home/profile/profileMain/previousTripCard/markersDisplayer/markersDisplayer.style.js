import { StyleSheet } from "react-native";
import { COLORS, SHADES, SHADOWS } from "../../../../../../constants";

const styles = StyleSheet.create({
    mapButtonContainer: {
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 2,
        padding: 12,
        borderRadius: 40,
        backgroundColor: COLORS.white,
        ...SHADOWS.medium,
    },
    mapContainer: { width: "100%", height: "100%" },
    detailsContainer: {
        position: "absolute",
        padding: 24,
        paddingTop: 12,
        backgroundColor: COLORS.white,
        width: "100%",
        bottom: 0,
        ...SHADOWS.medium,
    },
    detailsButtonRow: { alignItems: "flex-end", marginBottom: 12 },
    detailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    mainContent: {
        color: COLORS.black,
        fontWeight: "700",
    },
    detailsContent: {
        paddingHorizontal: 12,
        color: SHADES.black06,
    },
    // markerCircle: {
    //     width: 20,
    //     height: 20,
    //     borderRadius: 20,
    //     backgroundColor: COLORS.white,
    //     position: "absolute",
    //     top: 6,
    // },
    // markerContainer: {
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    // markerIcon: {
    //     position: "absolute",
    //     top: 10,
    //     fontSize: 10,
    // },
    // markerPin: {
    //     fontSize: 40,
    // },
    modalButtonContainer: {
        backgroundColor: COLORS.primary,
        marginLeft: "40%",
        minWidth: "60%",
        paddingVertical: 8,
        borderRadius: 4,
    },
    modalButtonContent: {
        color: COLORS.white,
        textAlign: "center",
    },
});

export default styles;
