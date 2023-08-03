import { SafeAreaView } from "react-native";
import ConnexionHeader from "../components/connexion/connexionHeader/ConnexionHeader";
import ConnexionFooter from "../components/connexion/connexionFooter/ConnexionFooter";
import { COLORS } from "../constants";
import PersonalsMain from "../components/signup/personals/personalsMain/PersonalsMain";

const authentification = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ConnexionHeader />
            <PersonalsMain />
            <ConnexionFooter firstWord="Already" link="Log in" />
        </SafeAreaView>
    );
};

export default authentification;
