import { StyleSheet } from "react-native";
import { SHADES } from "../../../../../../../../constants";

const styles = StyleSheet.create({
    buttonsContainer: {
        position: "absolute",
        gap: 16,
        right: 0,
        flexDirection: "row",
    },
    iconstStyle: { fontSize: 16, color: SHADES.black04 },
});

export default styles;
