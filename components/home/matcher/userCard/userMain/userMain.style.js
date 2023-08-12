import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    userMainStyle: {
        height: windowHeight - 248,
        width: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    imageStyle: {
        height: "100%",
        position: "absolute",
    },
});

export default styles;
