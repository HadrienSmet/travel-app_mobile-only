import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../constants";

const styles = StyleSheet.create({
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
});

export default styles;
