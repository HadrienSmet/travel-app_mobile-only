import { useState } from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import AppFooter from "../components/common/appFooter/AppFooter";
import AppHeader from "../components/common/appHeader/AppHeader";
import HomeMain from "../components/home/homeMain/HomeMain";

const home = () => {
    const [homeState, setHomeState] = useState("matcher");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <AppHeader />
            <HomeMain homeState={homeState} />
            <AppFooter homeState={homeState} setHomeState={setHomeState} />
        </SafeAreaView>
    );
};

export default home;
