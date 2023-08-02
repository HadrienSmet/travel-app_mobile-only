import { SafeAreaView } from "react-native";
import ConnexionHeader from "../components/connexion/connexionHeader/ConnexionHeader";
import ConnexionFooter from "../components/connexion/connexionFooter/ConnexionFooter";
import SignupMain from "../components/signup/signupMain/SignupMain";
import { COLORS } from "../constants";

const signup = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <ConnexionHeader />
            <SignupMain />
            <ConnexionFooter firstWord="Already" link="Log in" />
        </SafeAreaView>
    );
};

export default signup;
