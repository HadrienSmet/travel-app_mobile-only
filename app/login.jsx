import React from "react";
import { SafeAreaView, Text } from "react-native";

import { COLORS } from "../constants";
import ConnexionFooter from "../components/common/connexionFooter/ConnexionFooter";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Text>Log In</Text>
            <ConnexionFooter firstWord="Don't" link="Sign Up" />
        </SafeAreaView>
    );
};

export default Home;
