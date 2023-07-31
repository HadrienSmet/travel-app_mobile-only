import { Stack } from "expo-router";
import { View } from "react-native";
import LeftButton from "./leftButton/LeftButton";
import styles from "./connexionHeader.style";

const ConnexionHeader = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    headerStyle: styles.headerContainer,
                    headerShadowVisible: false,
                    headerLeft: () => <LeftButton />,
                    headerTitle: "",
                }}
            />
            <View style={styles.triangleContainer}></View>
        </View>
    );
};

export default ConnexionHeader;
