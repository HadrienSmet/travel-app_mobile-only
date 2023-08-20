import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../../../../../constants";

const styles = StyleSheet.create({
    mapClosingButtonContainer: {
        position: "absolute",
        top: 12,
        right: 16,
        zIndex: 10,
        padding: 8,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        ...SHADOWS.medium,
    },
    mapClosingButtonContent: {
        fontSize: SIZES.large,
        color: COLORS.black,
    },
    mapContainer: { width: "100%", height: "100%" },
});

export default styles;
