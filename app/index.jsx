import LoginLayout from "../components/login/loginLayout/LoginLayout";
import {
    useFonts,
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
} from "@expo-google-fonts/inter";
import { Cookie_400Regular } from "@expo-google-fonts/cookie";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Index = () => {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
        Inter_900Black,
        Cookie_400Regular,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) await SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <LoginLayout onLayout={onLayoutRootView} />;
};

export default Index;
