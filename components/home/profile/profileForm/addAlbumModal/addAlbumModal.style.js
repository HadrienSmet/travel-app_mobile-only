import { StyleSheet } from "react-native";
import { FONT, SHADES } from "../../../../../constants";

const styles = StyleSheet.create({
    basicContainerStyle: {
        borderRadius: 60,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: SHADES.black04,
        width: "48%",
    },
    buttonElement: {
        color: SHADES.black04,
        fontSize: FONT.large,
    },
});

export default styles;
