import { StyleSheet } from "react-native";
import { COLORS, SHADES, SIZES } from "../../../../constants/index";

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 2,
        alignItems: "center",
        gap: 12,
        paddingTop: 32,
        backgroundColor: COLORS.white,
    },

    pictureGradient: {
        width: 108,
        height: 108,
        borderRadius: 108,
        justifyContent: "center",
        alignItems: "center",
    },
    pictureWhiteBg: {
        position: "relative",
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    pictureStyle: {
        position: "absolute",
        width: 96,
        height: 96,
        borderRadius: 96,
    },
    fileButtonOpacity: {
        zIndex: 2,
        position: "absolute",
        top: 0,
        right: 0,
        transform: [{ translateX: 6 }, { translateY: -6 }],
    },
    fileButtonContainer: {
        height: 36,
        width: 36,
        borderRadius: 36,
        alignItems: "center",
        justifyContent: "center",
    },
    fileButtonIcon: {
        color: COLORS.white,
        fontSize: 16,
    },
    statusButtonOpacity: {
        zIndex: 2,
        position: "absolute",
        bottom: 0,
        right: 0,
        transform: [{ translateX: 16 }, { translateY: 4 }],
    },
    statusButtonContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        // borderColor: COLORS.white,
        // borderWidth: 2,
        borderRadius: 120,
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
    },
    statusButtonText: {
        fontSize: SIZES.small,
        fontWeight: "700",
        color: COLORS.white,
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
