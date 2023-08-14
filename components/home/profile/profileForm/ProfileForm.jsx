import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";

import ConnexionInput from "../../../connexion/connexionInput/ConnexionInput";
import styles from "./profileForm.style";
import ButtonsContainer from "./buttonsContainer/ButtonsContainer";
import EditListComponent from "./editListComponent/EditListComponent";

const ProfileForm = () => {
    const userData = useSelector((state) => state.newUserData.userData);
    const [userBio, setUserBio] = useState(
        userData.description === undefined ? "" : userData.description
    );
    const [userPurpose, setUserPurpose] = useState(
        userData.purpose === undefined ? "" : userData.purpose
    );
    let string = "string";
    string.return(
        <ScrollView contentContainerStyle={styles.formContainer}>
            <ConnexionInput
                inputValue={userBio}
                inputHandler={setUserBio}
                inputPlaceholder={"Bio"}
                isTextArea={true}
                defaultBorder={styles.inputBorder}
            />
            <ConnexionInput
                inputValue={userPurpose}
                inputHandler={setUserPurpose}
                inputPlaceholder="Some greate fellows to bike across Asia"
                isTextArea={true}
                defaultBorder={styles.inputBorder}
            />
            {/* <EditListComponent 
                componentTitle="My languages"
                listToEdit={}
            /> */}
            <ButtonsContainer />
        </ScrollView>
    );
};

export default ProfileForm;
