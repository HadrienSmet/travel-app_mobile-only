import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    modalSecondTitle: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    modalBasicDivision: {
        gap: 4,
    },
    modalInputBox: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: SHADES.black07,
        borderRadius: 0,
    },
    modalInputElement: {
        color: SHADES.black06,
    },
});

export default styles;
