import { Stack } from "expo-router";
import { View } from "react-native";

import styles from "./appHeader.style";
import TravelAppSvg from "../travelappSvg/TravelappSvg";
import RightButtons from "./rightButtons/RightButtons";

const AppHeader = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    headerStyle: styles.headerContainer,
                    headerShadowVisible: false,
                    headerLeft: () => <TravelAppSvg />,
                    headerTitle: "",
                    headerRight: () => <RightButtons />,
                }}
            />
        </View>
    );
};

export default AppHeader;
