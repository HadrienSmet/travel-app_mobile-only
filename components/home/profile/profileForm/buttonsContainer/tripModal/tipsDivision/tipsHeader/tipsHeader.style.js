import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../../../../constants";

const styles = StyleSheet.create({
    divisionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black,
    },
    mainTitle: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
});

export default styles;
