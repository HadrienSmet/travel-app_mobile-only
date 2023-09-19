import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    buttonsContainer: {
        width: "100%",
        // height: "100%",
        alignItems: "flex-end",
        position: "absolute",
        paddingHorizontal: 12,
        top: 24,
        gap: 12,
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
