import { StyleSheet } from "react-native";
import { COLORS, SHADOWS } from "../../../../../../../../constants";

const styles = StyleSheet.create({
    buttonsRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
    },
    buttonContent: { color: COLORS.white },
    deleteButton: { backgroundColor: COLORS.warning },
    editButton: { backgroundColor: COLORS.primary },
    elementButtonContainer: {
        width: 32,
        height: 32,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.medium,
    },
});

export default styles;
