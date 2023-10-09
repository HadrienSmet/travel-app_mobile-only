import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    mapPinCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        position: "absolute",
        top: 6,
    },
    mapPinContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    mapPinIcon: {
        position: "absolute",
        top: 10,
        fontSize: 10,
    },
    mapPin: { fontSize: 40 },
});

export default styles;
