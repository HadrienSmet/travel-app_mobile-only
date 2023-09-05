import { StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../../../../../../constants";

const styles = StyleSheet.create({
    mapElementHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    elementTitle: { color: COLORS.black, fontWeight: "700" },
    elementContent: { color: SHADES.black06 },
});

export default styles;
