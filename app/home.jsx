import { SafeAreaView, Text } from "react-native";
import { COLORS } from "../constants";
import AppHeader from "../components/common/appHeader/AppHeader";
import HomeMain from "../components/home/homeMain/HomeMain";

const home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <AppHeader />
            <HomeMain />
        </SafeAreaView>
    );
};

export default home;
