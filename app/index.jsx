// import { useFonts } from "expo-font";
import LoginLayout from "../components/login/loginLayout/LoginLayout";
// import { Slot } from "expo-router";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
};

const Index = () => {
    // const [fontsLoaded] = useFonts({
    //     CookieRegular: require("./assets/fonts/Cookie-Regular.ttf"),
    //     InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    //     InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    //     InterBlack: require("./assets/fonts/Inter-Black.ttf"),
    // });
    // if (!fontsLoaded) return <Slot />;
    return <LoginLayout />;
};

export default Index;
