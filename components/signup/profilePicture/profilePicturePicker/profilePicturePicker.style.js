import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 20,
    },
    profilePicture: {
        width: "100%",
        height: windowHeight * 0.4,
        borderRadius: 8,
    },
    defaultArea: {
        width: "100%",
        backgroundColor: COLORS.white,
        height: windowHeight * 0.4,
        borderRadius: 8,
    },
    profilePictureButtonContainer: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: COLORS.white,
        borderRadius: 4,
        paddingBottom: 10,
        paddingTop: 10,
    },
    profilePictureButtonText: {
        color: COLORS.white,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "700",
    },
});

export default styles;
