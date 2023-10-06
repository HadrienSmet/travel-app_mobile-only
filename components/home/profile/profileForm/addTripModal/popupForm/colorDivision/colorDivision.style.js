import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    colorContainer: {
        width: 52,
        height: 52,
        borderRadius: 8,
    },
    colorDivision: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
    },
    slidersContainer: { width: width * 0.9 - 144 },
    slider: {
        width: "100%",
        height: 20,
    },
});

export default styles;
