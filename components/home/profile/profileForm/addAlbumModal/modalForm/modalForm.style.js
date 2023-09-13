import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../../../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    albumTitleInput: {
        borderBottomWidth: 1,
        borderColor: SHADES.black04,
        paddingVertical: 8,
        paddingHorizontal: 16,
        textAlign: "center",
        width: "60%",
        // marginHorizontal: "20%",
    },
    confirmButtonContainer: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 60,
    },
    confirmButtonElement: {
        color: COLORS.white,
        textTransform: "uppercase",
        letterSpacing: 1.6,
        fontWeight: "700",
        fontSize: SIZES.small,
    },
    pictureButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        borderColor: COLORS.primary,
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 60,
    },
    pictureButtonElement: {
        color: COLORS.primary,
        fontWeight: "700",
        letterSpacing: 1.2,
        fontSize: SIZES.small,
    },
    pictureButtonRow: {
        width: "100%",
        alignItems: "flex-end",
        paddingHorizontal: 16,
    },
    picturesScrollView: {
        paddingHorizontal: 16,
        height: windowHeight - 296,
        width: "100%",
    },
    picturesDisplayer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    pictureStyle: {
        width: windowWidth / 2 - 20,
        height: windowWidth / 2 - 20,
    },
});

export default styles;
