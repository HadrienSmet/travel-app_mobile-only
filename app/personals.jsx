import { SafeAreaView } from "react-native";
import ConnexionHeader from "../components/connexion/connexionHeader/ConnexionHeader";
import ConnexionFooter from "../components/connexion/connexionFooter/ConnexionFooter";
import { COLORS } from "../constants";
import PersonalsMain from "../components/signup/personals/personalsMain/PersonalsMain";
import { useKeyboardStatus } from "../hooks/useKeyboardStatus";

const authentification = () => {
    const keyboardStatus = useKeyboardStatus();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ConnexionHeader />
            <PersonalsMain />
            {keyboardStatus === "hidden" && (
                <ConnexionFooter firstWord="Already" link="Log in" />
            )}
        </SafeAreaView>
    );
};

export default authentification;
