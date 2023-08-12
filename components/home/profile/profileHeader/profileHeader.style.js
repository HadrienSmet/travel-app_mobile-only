import { StyleSheet } from "react-native";
import { COLORS, SHADES } from "../../../../constants/index";

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 2,
        alignItems: "center",
        gap: 12,
        paddingTop: 32,
        backgroundColor: COLORS.white,
    },

    pictureContainer: {
        width: 92,
        height: 92,
        borderRadius: 92,
        justifyContent: "center",
        alignItems: "center",
    },
    pictureWhiteBg: {
        width: 84,
        height: 84,
        borderRadius: 84,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    pictureStyle: {
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    fileButtonOpacity: {
        width: "100%",
        height: "100%",
        zIndex: 2,
    },
    fileButtonContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        height: 36,
        width: 36,
        borderRadius: 36,
        alignItems: "center",
        justifyContent: "center",
        transform: [{ translateX: 6 }, { translateY: 6 }],
    },
    fileButtonIcon: {
        color: COLORS.white,
        fontSize: 16,
    },

    userDetails: {
        flexDirection: "row",
        gap: 12,
    },
    detailsElement: {
        zIndex: 3,
        fontSize: 16,
        color: SHADES.black07,
    },
});

export default styles;
