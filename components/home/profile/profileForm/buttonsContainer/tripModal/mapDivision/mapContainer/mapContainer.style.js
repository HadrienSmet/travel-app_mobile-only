import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mapView: {
        width: "100%",
        height: windowHeight - 428,
    },
    mapIconsContainer: {
        position: "absolute",
        alignItems: "center",
        top: 12,
        right: 12,
        gap: 12,
        padding: 8,
        backgroundColor: COLORS.white,
        borderRadius: 60,
    },
    arrivalColor: { color: COLORS.primary },
    stopoverColor: { color: COLORS.secondary },
    departureColor: { color: COLORS.tertiary },
    adviceColor: { color: "green" },
    warningColor: { color: "red" },
});

export default styles;
