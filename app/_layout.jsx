import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Slot, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "home",
};

const Layout = () => {
    // const [fontsLoaded, setFontsLoaded] = useState(false);

    // useEffect(() => {
    //     const loadFontsAsync = async () => {
    //         await Font.loadAsync({
    //             CookieRegular: require("../assets/fonts/Cookie-Regular.ttf"),
    //             InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    //             InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    //             InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    //         });

    //         setFontsLoaded(true);
    //     };

    //     loadFontsAsync();
    // }, []);

    // useEffect(() => {
    //     const hideSplashScreen = async () => {
    //         if (fontsLoaded) await SplashScreen.hideAsync();
    //     };

    //     hideSplashScreen();
    // }, [fontsLoaded]);
    const [fontsLoaded] = useFonts({
        CookieRegular: require("../assets/fonts/Cookie-Regular.ttf"),
        InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
        InterBold: require("../assets/fonts/Inter-Bold.ttf"),
        InterBlack: require("../assets/fonts/Inter-Black.ttf"),
    });

    if (!fontsLoaded) {
        return <Slot />;
    }

    return (
        <Stack initialRouteName="login">
            <Stack.Screen name="login" />
        </Stack>
    );
};

export default Layout;
