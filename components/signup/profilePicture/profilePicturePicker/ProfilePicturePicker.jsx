import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./profilePicturePicker.style";

const ProfilePicturePicker = () => {
    const [profilePicture, setProfilePicture] = useState(null);

    const pickProfilePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setProfilePicture(result.assets[0].uri);
        } else {
            alert("Canceled");
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
            {profilePicture && (
                <TouchableOpacity style={styles.profilePictureButtonContainer}>
                    <Text style={styles.profilePictureButtonText}>Confirm</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ProfilePicturePicker;
