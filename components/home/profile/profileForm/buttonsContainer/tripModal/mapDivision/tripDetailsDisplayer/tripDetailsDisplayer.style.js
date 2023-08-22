import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../../../constants";

const styles = StyleSheet.create({
    componentContainer: { gap: 20 },
    basicDivision: {
        gap: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: SHADES.black06,
        borderRadius: 8,
    },
    divisionTitle: {
        fontSize: SIZES.medium,
        fontWeight: "700",
        color: COLORS.black,
    },
    mapElementDivision: {
        gap: 4,
        borderColor: SHADES.black04,
    },
    mapElementHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    elementTitle: { color: COLORS.black, fontWeight: "700" },
    elementContent: { color: SHADES.black06 },
});

export default styles;
