import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../../../../constants";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
    },
    modalContentContainer: {
        paddingVertical: 16,
        paddingHorizontal: windowWidth / 12,
        backgroundColor: COLORS.white,
    },
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
