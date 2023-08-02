import { Text } from "react-native";
import { Cookie_400Regular, useFonts } from "@expo-google-fonts/cookie";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const LeftButton = () => {
    const [fontsLoaded] = useFonts({
        Cookie_400Regular,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) await SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;
    if (!fontsLoaded) return null;
    return (
        <Text
            onLayout={onLayoutRootView}
            style={{
                fontWeight: "900",
                fontFamily: "Cookie_400Regular",
            }}
        >
            TravelApp
        </Text>
    );
};

export default LeftButton;
