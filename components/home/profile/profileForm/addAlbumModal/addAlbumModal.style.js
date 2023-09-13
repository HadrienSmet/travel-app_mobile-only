import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONT, SHADES, SIZES } from "../../../../../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
    
    modalStyle: {
        alignItems: "center",
        gap: 16,
    },
    
    
});

export default styles;
