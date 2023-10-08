import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../../../../constants";

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
