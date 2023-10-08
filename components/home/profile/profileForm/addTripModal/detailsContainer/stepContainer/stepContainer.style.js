import { StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../../../../../constants";

const styles = StyleSheet.create({
    borderBottom: {
        width: "60%",
        marginHorizontal: "20%",
        borderBottomWidth: 1,
        borderColor: SHADES.black02,
    },
    stepContainer: {
        gap: 8,
        paddingVertical: 8,
    },
    stepContent: {
        color: COLORS.black,
        width: "75%",
        marginHorizontal: "12.5%",
        textAlign: "center",
    },
    setpHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    stepType: {
        fontWeight: "700",
        color: SHADES.black07,
        letterSpacing: 1.1,
    },
});

export default styles;
