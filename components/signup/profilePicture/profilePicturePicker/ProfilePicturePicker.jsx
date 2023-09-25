import { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { axiosSignup } from "../../../../utils/axios/user";
// import { axiosPutCoverPicture } from "../../../../utils/axios/user/axiosPutCoverPicture";
import { setUserData } from "../../../../features/userData.slice";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./profilePicturePicker.style";

const ProfilePicturePicker = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [isWarned, setIsWarned] = useState(false);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const router = useRouter();
    const dispatch = useDispatch();

    const pickProfilePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfilePicture(result.assets[0].uri);
        } else {
            alert("Canceled");
        }
    };

    const handleConfirm = () => {
        if (profilePicture) {
            const formData = new FormData();
            const presentTimestamp = Date.now();
            formData.append("file", {
                uri: profilePicture,
                name: `${userData.firstname}-${userData.lastname}_profile-picture_${presentTimestamp}.jpg`,
            });
            axiosSignup(userData)
                .then((res) => {
                    // axiosPutCoverPicture(res, formData)
                    //     .then((res) => {
                    // dispatch(setUserData(res.data));
                    dispatch(setUserData(res.data));
                    router.push("/home");
                    // })
                    // .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        } else {
            if (!isWarned) {
                setIsWarned(true);
                alert("Are you sure you dont want to set a picture?");
            } else {
                axiosSignup(userData)
                    .then((res) => {
                        dispatch(setUserData(res.data));
                        router.push("/home");
                    })
                    .catch((err) => console.log(err));
            }
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
                <View style={styles.defaultArea}>
                    <FontAwesome style={styles.iconStyle} name="user" />
                </View>
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
