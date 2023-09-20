import { Dimensions, StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS, SHADES } from "../../../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    defaultBorder: {
        borderColor: SHADES.black06,
    },
    defaultElement: {
        color: SHADES.black06,
    },
    selectedBorder: {
        borderColor: COLORS.primary,
    },
    selectedElement: {
        color: COLORS.primary,
    },
    filtersContainer: {
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
    filterButton: {
        width: 32,
        height: 32,
        borderRadius: 32,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
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
