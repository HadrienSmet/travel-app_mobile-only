import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLanguagesArray } from "../../../../hooks/useLanguagesArray";

import { Text, View } from "react-native";
import ConnexionInput from "../../../connexion/connexionInput/ConnexionInput";
import ButtonsContainer from "./buttonsContainer/ButtonsContainer";
import EditListComponent from "./editListComponent/EditListComponent";

import styles from "./profileForm.style";
import { useCountryArray } from "../../../../hooks/useCountryArray";

const ProfileForm = () => {
    const userData = useSelector((state) => state.newUserData.userData);
    const { languagesArray } = useLanguagesArray();
    const { countriesArray } = useCountryArray();

    const [userBio, setUserBio] = useState(
        userData.description === undefined ? "" : userData.description
    );
    const [userPurpose, setUserPurpose] = useState(
        userData.purpose === undefined ? "" : userData.purpose
    );
    const [userLanguages, setUserLanguages] = useState(userData.languages);
    const [userDreamTrips, setUserDreamTrips] = useState(userData.dreamTrips);

    const handleUserLanguages = (value) => {
        if (userLanguages === undefined) {
            setUserLanguages([value]);
        } else {
            setUserLanguages((state) => [...state, value]);
        }
    };
    const handleUserDreamTrips = (value) => {
        if (userDreamTrips === undefined) {
            setUserDreamTrips([value]);
        } else {
            setUserDreamTrips((state) => [...state, value]);
        }
    };
    return (
        <View style={styles.formContainer}>
            <ConnexionInput
                inputValue={userBio}
                inputHandler={setUserBio}
                inputPlaceholder={"Bio"}
                isTextArea={true}
                defaultBorder={styles.inputBorder}
            />
            <View style={styles.fieldDivision}>
                <Text style={styles.titleContainer}>What I seak</Text>
                <ConnexionInput
                    inputValue={userPurpose}
                    inputHandler={setUserPurpose}
                    inputPlaceholder="Some greate fellows to bike across Asia"
                    isTextArea={true}
                    defaultBorder={styles.inputBorder}
                />
            </View>
            <EditListComponent
                componentTitle="My languages"
                listToEdit={languagesArray}
                propertyToDisplay="name"
                userCurrentList={userLanguages}
                listPlaceholder={
                    userLanguages === undefined
                        ? "French, Deutch, English"
                        : userLanguages.join(", ")
                }
                handleEdit={handleUserLanguages}
            />
            <EditListComponent
                componentTitle="My dream trips"
                listToEdit={countriesArray}
                userCurrentList={userDreamTrips}
                listPlaceholder={
                    userDreamTrips === undefined
                        ? "Japan, Thaïland, Australia"
                        : userDreamTrips.join(", ")
                }
                handleEdit={handleUserDreamTrips}
            />
            <ButtonsContainer />
        </View>
    );
};

export default ProfileForm;
