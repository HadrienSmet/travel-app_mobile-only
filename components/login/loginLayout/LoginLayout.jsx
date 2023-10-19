import React from "react";
import { SafeAreaView } from "react-native";

import { COLORS } from "../../../constants";
import ConnexionFooter from "../../connexion/connexionFooter/ConnexionFooter";
import ConnexionHeader from "../../connexion/connexionHeader/ConnexionHeader";
import LoginMain from "../loginMain/LoginMain";
import { useKeyboardStatus } from "../../../hooks";

const LoginLayout = () => {
    const keyboardStatus = useKeyboardStatus();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ConnexionHeader />
            <LoginMain />
            {keyboardStatus === "hidden" && (
                <ConnexionFooter firstWord="Don't" link="Sign Up" />
            )}
        </SafeAreaView>
    );
};

export default LoginLayout;
