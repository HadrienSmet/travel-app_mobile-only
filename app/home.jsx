import { SafeAreaView, Text } from "react-native";
import AppHeader from "../components/common/appHeader/AppHeader";

const home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <AppHeader />
            <Text>Home Page</Text>
        </SafeAreaView>
    );
};

export default home;
