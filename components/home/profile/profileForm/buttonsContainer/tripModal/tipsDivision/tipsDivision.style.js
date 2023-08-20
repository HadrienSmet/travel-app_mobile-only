import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../../constants";

const styles = StyleSheet.create({
    tipsDivisionContainer: {
        gap: 12,
        paddingHorizontal: 12,
    },
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
    secondTitle: {
        fontSize: SIZES.medium,
        color: SHADES.black07,
    },
    basicDivision: {
        gap: 4,
    },
    inputBox: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 0,
    },
    inputElement: {
        color: SHADES.black06,
    },
    mapContainer: {
        minWidth: 100,
        minHeight: 100,
        width: "100%",
        height: 140,
    },
    textAreaStyle: {
        borderWidth: 1,
        borderColor: SHADES.black04,
        borderRadius: 8,
        textAlignVertical: "top",
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
});

export default styles;
