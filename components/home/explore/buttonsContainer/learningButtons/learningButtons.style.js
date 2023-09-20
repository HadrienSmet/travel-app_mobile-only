import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS, SHADES } from "../../../../../constants";

const styles = StyleSheet.create({
    knowledgeContainer: {
        position: "absolute",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 12,
        width: 248,
        transform: [{ translateX: -256 }],
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 4,
        ...SHADOWS.medium,
    },
    defaultBorder: {
        borderColor: SHADES.black06,
    },
    knowledgeButton: {
        width: 32,
        height: 32,
        borderRadius: 32,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    knowledgeElement: { color: SHADES.black06 },
    knowledgeFirstElement: {
        fontSize: 8,
        transform: [{ translateX: -4 }],
    },
    knowledgeSecondElement: {
        fontSize: 8,
        transform: [{ translateX: 4 }],
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
});

export default styles;
