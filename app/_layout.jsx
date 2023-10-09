import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store/index";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "index",
};

const Layout = () => {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen
                    name="personals"
                    screenOptions={{ headerShown: false }}
                />
            </Stack>
        </Provider>
    );
};

export default Layout;
