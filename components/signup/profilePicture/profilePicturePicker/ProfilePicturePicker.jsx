import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./profilePicturePicker.style";
import { useSelector } from "react-redux";
import { axiosPostUserSignupData } from "../../../../utils/axios/user/axiosPostUserSignupData";
import { saveJwtToken } from "../../../../utils/functions/saveJwtToken";
import { axiosPutCoverPicture } from "../../../../utils/axios/user/axiosPutCoverPicture";

const ProfilePicturePicker = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const userData = useSelector((state) => state.newSignupData.signupData);

    const pickProfilePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result.assets[0]);
            setProfilePicture(result.assets[0].uri);
        } else {
            alert("Canceled");
        }
    };

    const handleConfirm = () => {
        if (profilePicture) {
            const formData = new FormData();
            formData.append("file", {
                uri: profilePicture,
                name: `${userData.firstname}_${userData.lastname}_profile.jpg`,
            });
            axiosPostUserSignupData(userData)
                .then((res) => {
                    console.log(res);
                    saveJwtToken(res.data);
                    axiosPutCoverPicture(res, formData)
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        } else {
            alert("Are you sure you dont want to set a picture?");
            axiosPostUserSignupData(userData)
                .then((res) => {
                    console.log(res);
                    saveJwtToken(res.data);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <View style={styles.container}>
            {profilePicture ? (
                <Image
                    source={{ uri: profilePicture }}
                    style={styles.profilePicture}
                />
            ) : (
                <View style={styles.defaultArea}></View>
            )}
            <TouchableOpacity
                style={styles.profilePictureButtonContainer}
                onPress={pickProfilePicture}
            >
                <Text style={styles.profilePictureButtonText}>
                    {profilePicture
                        ? "Change profile picture"
                        : "Choose a profile picture"}
                </Text>
            </TouchableOpacity>
            {profilePicture ? (
                <TouchableOpacity
                    onPress={handleConfirm}
                    style={styles.profilePictureButtonContainer}
                >
                    <Text style={styles.profilePictureButtonText}>Confirm</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={handleConfirm}
                    style={styles.profilePictureButtonContainer}
                >
                    <Text style={styles.profilePictureButtonText}>
                        Continue without picture
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ProfilePicturePicker;
