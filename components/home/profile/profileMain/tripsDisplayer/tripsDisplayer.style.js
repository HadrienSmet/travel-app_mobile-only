import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../../../../constants";

const styles = StyleSheet.create({
    buttonsContainer: {
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 2,
        gap: 16,
    },
    mapButtonContainer: {
        padding: 12,
        borderRadius: 40,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.medium,
    },
    modalButtonContainer: {
        borderColor: COLORS.primary,
        borderRadius: 40,
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        paddingVertical: 8,
        width: "48%",
    },
    modalButtonContent: {
        color: COLORS.primary,
    },
});

export default styles;
