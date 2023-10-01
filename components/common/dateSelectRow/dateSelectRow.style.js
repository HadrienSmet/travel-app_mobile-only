import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const windowWidth = Dimensions.get("window").width;
const rowInputsWidth = windowWidth * 0.75 - 68;

const styles = StyleSheet.create({
    divRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    inputsRow: {
        flexDirection: "row",
        width: rowInputsWidth,
        gap: 8,
    },
    inputElem: { color: COLORS.white },
    rowTitle: {
        color: COLORS.white,
        fontWeight: "600",
        marginTop: 12,
    },
    selectBox: {
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
    },
    selectDropdown: {
        backgroundColor: COLORS.white,
        borderWidth: 0,
    },
});

export default styles;
