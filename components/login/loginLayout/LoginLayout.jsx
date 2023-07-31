import React from "react";
import { SafeAreaView } from "react-native";

import { COLORS } from "../../../constants";
import ConnexionFooter from "../../connexion/connexionFooter/ConnexionFooter";
import ConnexionHeader from "../../connexion/connexionHeader/ConnexionHeader";
import LoginMain from "../loginMain/LoginMain";

const LoginLayout = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ConnexionHeader />
            <LoginMain />
            <ConnexionFooter firstWord="Don't" link="Sign Up" />
        </SafeAreaView>
    );
};

export default LoginLayout;
