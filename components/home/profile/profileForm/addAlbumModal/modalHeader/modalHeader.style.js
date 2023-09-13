import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../../constants";

const styles = StyleSheet.create({
    closingButtonIcon: { fontSize: SIZES.large },
    closingButtonRow: {
        width: "100%",
        alignItems: "flex-end",
        paddingHorizontal: 20,
        paddingTop: 12,
    },
    titleMain: {
        fontSize: SIZES.large,
        color: COLORS.black,
        fontWeight: "700",
        textAlign: "center",
    },
});

export default styles;
