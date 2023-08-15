import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLanguagesArray } from "../../../../hooks/useLanguagesArray";

import { Text, View } from "react-native";
import ConnexionInput from "../../../connexion/connexionInput/ConnexionInput";
import ButtonsContainer from "./buttonsContainer/ButtonsContainer";
import EditListComponent from "./editListComponent/EditListComponent";

import styles from "./profileForm.style";
import { useCountryArray } from "../../../../hooks/useCountryArray";

const useUserLanguages = (userData) => {
    const { languagesArray } = useLanguagesArray();
    const [userLanguages, setUserLanguages] = useState(userData.languages);
    const handleUserLanguages = (value) => {
        if (userLanguages === undefined) {
            setUserLanguages([value]);
        } else {
            setUserLanguages((state) => [...state, value]);
        }
    };

    return {
        languagesArray,
        userLanguages,
        handleUserLanguages,
    };
};
const useUserDreamTrips = (userData) => {
    const { countriesArray } = useCountryArray();
    const [userDreamTrips, setUserDreamTrips] = useState(userData.dreamTrips);

    const handleUserDreamTrips = (value) => {
        if (userDreamTrips === undefined) {
            setUserDreamTrips([value]);
        } else {
            setUserDreamTrips((state) => [...state, value]);
        }
    };

    return {
        countriesArray,
        userDreamTrips,
        handleUserDreamTrips,
    };
};

const ProfileForm = ({ travelerType, onTravel }) => {
    const userData = useSelector((state) => state.newUserData.userData);
    const { languagesArray, userLanguages, handleUserLanguages } =
        useUserLanguages(userData);
    const { countriesArray, userDreamTrips, handleUserDreamTrips } =
        useUserDreamTrips(userData);
    const [userBio, setUserBio] = useState(
        userData.description === undefined ? "" : userData.description
    );
    const [userPurpose, setUserPurpose] = useState(
        userData.purpose === undefined ? "" : userData.purpose
    );

    const handleConfirm = () => {
        const data = {
            onTravel,
            travelerType,
            bio: userBio,
            purpose: userPurpose,
            languages: userLanguages,
            dreamTrips: userDreamTrips,
        };
        console.log(data);
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
            <ButtonsContainer handleConfirm={handleConfirm} />
        </View>
    );
};

export default ProfileForm;
