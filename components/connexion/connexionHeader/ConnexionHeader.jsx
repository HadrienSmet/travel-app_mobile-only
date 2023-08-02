import { Stack } from "expo-router";
import { View, Dimensions } from "react-native";
import { withAnchorPoint } from "react-native-anchor-point";

import LeftButton from "./leftButton/LeftButton";
import styles from "./connexionHeader.style";
import TravelAppSvg from "../../common/travelappSvg/TravelappSvg";

const windowWidth = Dimensions.get("window").width;
const getTransform = () => {
    const transform = {
        transform: [
            { translateX: -(windowWidth / 2) },
            { translateY: -50 },
            { rotate: "-5deg" },
        ],
    };
    return withAnchorPoint(
        transform,
        { x: 0.75, y: 1 },
        { width: windowWidth * 2, height: 50 }
    );
};

const ConnexionHeader = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    headerStyle: styles.headerContainer,
                    headerShadowVisible: false,
                    headerLeft: () => <TravelAppSvg />,
                    headerTitle: "",
                }}
            />
            <View style={[styles.triangleContainer, getTransform()]}></View>
        </View>
    );
};

export default ConnexionHeader;
