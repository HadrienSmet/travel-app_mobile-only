import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import useCachedResources from "../hooks/useCachedResources";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
};

const Layout = () => {
    // const [fontsLoaded] = useFonts({
    //     CookieRegular: require("../assets/fonts/Cookie-Regular.ttf"),
    //     InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    //     InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    //     InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    // });

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //         router.push("/login");
    //     }
    // }, [fontsLoaded]);
    const { isLoadingComplete } = useCachedResources();

    if (!isLoadingComplete) return <Slot />;

    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" />
        </Stack>
    );
};

export default Layout;
