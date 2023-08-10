import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../constants";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        backgroundColor: COLORS.gray2,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    headerElement: {
        color: COLORS.white,
    },
});

export default styles;
