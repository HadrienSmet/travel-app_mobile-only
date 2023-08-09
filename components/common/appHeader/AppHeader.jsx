import { Stack } from "expo-router";
import { View } from "react-native";

import styles from "./appHeader.style";
import TravelAppSvg from "../travelappSvg/TravelappSvg";

const AppHeader = () => {
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
        </View>
    );
};

export default AppHeader;
