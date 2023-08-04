import { SafeAreaView, View } from "react-native";
import ConnexionHeader from "../components/connexion/connexionHeader/ConnexionHeader";
import ConnexionFooter from "../components/connexion/connexionFooter/ConnexionFooter";
import ProfilePictureMain from "../components/signup/profilePicture/profilePictureMain/ProfilePictureMain";

const profilePicture = () => {
    return (
        <SafeAreaView>
            <ConnexionHeader />
            <ProfilePictureMain />
            <ConnexionFooter firstWord="Already" link="Log In" />
        </SafeAreaView>
    );
};
export default profilePicture;
