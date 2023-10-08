import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../../../constants";

const styles = StyleSheet.create({
    detailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    detailsHeaderElem: {
        fontSize: SIZES.medium,
        fontWeight: "600",
        color: COLORS.black,
    },
    upsideDownIcon: {
        transform: [{ rotate: "180deg" }],
    },
});

export default styles;
