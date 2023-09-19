import { useState } from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import AppFooter from "../components/common/appFooter/AppFooter";
import AppHeader from "../components/common/appHeader/AppHeader";
import HomeMain from "../components/home/homeMain/HomeMain";
import { useKeyboardStatus } from "../hooks/useKeyboardStatus";

const home = () => {
    const [homeState, setHomeState] = useState("matcher");
    const keyboardStatus = useKeyboardStatus();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <AppHeader />
            <HomeMain homeState={homeState} />
            {keyboardStatus === "hidden" && (
                <AppFooter homeState={homeState} setHomeState={setHomeState} />
            )}
        </SafeAreaView>
    );
};

export default home;
