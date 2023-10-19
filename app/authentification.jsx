import { SafeAreaView } from "react-native";
import ConnexionHeader from "../components/connexion/connexionHeader/ConnexionHeader";
import ConnexionFooter from "../components/connexion/connexionFooter/ConnexionFooter";
import SignupMain from "../components/signup/authentification/signupMain/SignupMain";
import { COLORS } from "../constants";
import { useKeyboardStatus } from "../hooks";

const authentification = () => {
    const keyboardStatus = useKeyboardStatus();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ConnexionHeader />
            <SignupMain />
            {keyboardStatus === "hidden" && (
                <ConnexionFooter firstWord="Already" link="Log in" />
            )}
        </SafeAreaView>
    );
};

export default authentification;
