import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    // ...Ionicons.font,
                    CookieRegular: require("../assets/fonts/Cookie-Regular.ttf"),
                    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
                    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
                    InterBlack: require("../assets/fonts/Inter-Black.ttf"),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return { isLoadingComplete };
}
