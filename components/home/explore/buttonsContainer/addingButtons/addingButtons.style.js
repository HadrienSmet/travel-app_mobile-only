import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../../constants";

const styles = StyleSheet.create({
    addingButtonsContainer: { flexDirection: "row", gap: 4 },
    addingButtonsRow: {
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 8,
    },
    mainButtonContainer: {
        width: 48,
        height: 48,
        borderRadius: 48,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.medium,
    },
    mainButtonElement: { fontSize: SIZES.large },
    tipsButtonContainer: {
        width: 36,
        height: 36,
        borderRadius: 36,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.small,
    },
    buttonElement: { fontSize: SIZES.medium },
    adviceColor: { color: COLORS.advice },
    warningColor: { color: COLORS.warning },
});

export default styles;
