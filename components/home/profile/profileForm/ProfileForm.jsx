import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguagesArray } from "../../../../hooks/useLanguagesArray";
import { useCountryArray } from "../../../../hooks/useCountryArray";

import { axiosPatchProfileData } from "../../../../utils/axios/user/axiosPatchProfileData";
import { setUserData } from "../../../../features/userData.slice";

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AddAlbumModal from "./addAlbumModal/AddAlbumModal";
import AddTripModal from "./addTripModal/AddTripModal";
import EditListComponent from "./editListComponent/EditListComponent";
import PreviousTripsDivision from "./previousTripsDivision/PreviousTripsDivision";

import styles from "./profileForm.style";

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

const ProfileForm = ({ travelerType, onTravel, setIsEditing }) => {
    const userData = useSelector((state) => state.userDataReducer.userData);
    const dispatch = useDispatch();
    const { languagesArray, userLanguages, handleUserLanguages } =
        useUserLanguages(userData);
    const { countriesArray, userDreamTrips, handleUserDreamTrips } =
        useUserDreamTrips(userData);
    const [userBio, setUserBio] = useState(
        userData.bio === undefined ? "" : userData.bio
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
        axiosPatchProfileData(userData.userId, data, userData.token)
            .then((res) => {
                setIsEditing(false);
                console.log("new userData: " + userData.previousTrips);
                dispatch(setUserData(res.data));
                console.log("new userData: " + userData.previousTrips);
            })
            .catch((err) => {
                setIsEditing(false);
                alert(err);
            });
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                multiline
                numberOfLines={6}
                value={userBio}
                onChangeText={setUserBio}
                placeholder="Bio"
                style={[styles.textareaStyle, { verticalAlign: "top" }]}
            />
            <View style={styles.fieldDivision}>
                <Text style={styles.titleContainer}>What I seak</Text>
                <TextInput
                    multiline
                    numberOfLines={6}
                    value={userPurpose}
                    onChangeText={setUserPurpose}
                    placeholder="Some great fellows to bike accross Asia"
                    style={[styles.textareaStyle, { verticalAlign: "top" }]}
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
            <PreviousTripsDivision />
            <View style={styles.buttonsDivision}>
                <View style={styles.buttonsContainer}>
                    <AddAlbumModal />
                    <AddTripModal />
                </View>
                <TouchableOpacity
                    onPress={handleConfirm}
                    style={[
                        styles.basicContainerStyle,
                        styles.confirmContainer,
                    ]}
                >
                    <FontAwesome style={styles.confirmElement} name="check" />
                    <Text style={styles.confirmElement}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileForm;
