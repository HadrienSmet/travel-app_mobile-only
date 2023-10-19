import { SafeAreaView } from "react-native";
import { useKeyboardStatus } from "../hooks";
import ConnexionHeader from "../components/connexion/connexionHeader/ConnexionHeader";
import ConnexionFooter from "../components/connexion/connexionFooter/ConnexionFooter";
import ProfilePictureMain from "../components/signup/profilePicture/profilePictureMain/ProfilePictureMain";

const profilePicture = () => {
    const keyboardStatus = useKeyboardStatus();
    return (
        <SafeAreaView>
            <ConnexionHeader />
            <ProfilePictureMain />
            {keyboardStatus === "hidden" && (
                <ConnexionFooter firstWord="Already" link="Log In" />
            )}
        </SafeAreaView>
    );
};
export default profilePicture;
