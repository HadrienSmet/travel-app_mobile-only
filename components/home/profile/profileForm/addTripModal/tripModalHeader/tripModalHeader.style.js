import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../../constants";

const styles = StyleSheet.create({
    modalHeader: { width: "100%", alignItems: "flex-end" },
    closingIcon: {
        fontSize: 20,
        color: COLORS.black,
    },
    modalMainTitle: {
        fontSize: SIZES.large,
        textAlign: "center",
        width: "100%",
    },
});

export default styles;
