import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const windowWidth = Dimensions.get("window").width;
const rowInputsWidth = windowWidth * 0.75 - 68;

const styles = StyleSheet.create({
    divRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
        marginBottom: 16,
    },
    inputsRow: {
        flexDirection: "row",
        // justifyContent: "space-between",
        width: rowInputsWidth,
        gap: 8,
    },
    rowTitle: {
        color: COLORS.white,
        fontWeight: "600",
        marginTop: 12,
    },
    selectBox: {
        borderRadius: 4,
        backgroundColor: COLORS.white,
        borderWidth: 0,
        paddingHorizontal: 0,
        justifyContent: "center",
    },
    selectContent: {
        position: "absolute",
        top: 12,
        pointerEvents: "none",
    },
    selectDivision: {
        alignItems: "center",
        // justifyContent: "center",
    },
    selectDropdown: {
        backgroundColor: COLORS.white,
        borderWidth: 0,
    },
});

export default styles;