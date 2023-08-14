import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

import { COLORS } from "../../../../constants";
import styles from "./profileHeader.style";

const useProfileHeader = () => {
    const [newProfilePicture, setNewProfilePicture] = useState(undefined);

    const pickProfilePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setNewProfilePicture(result.assets[0].uri);
        } else {
            alert("Canceled");
        }
    };

    return {
        newProfilePicture,
        pickProfilePicture,
    };
};

const ProfileHeader = ({
    isEditing,
    profilePicture,
    firstname,
    age,
    onTravel,
    travelerType,
}) => {
    const [url, setUrl] = useState(
        profilePicture === undefined
            ? require(`../../../../assets/images/default-user.png`)
            : require(`../../../../assets/images/default-user.png`)
    );
    const { newProfilePicture, pickProfilePicture } = useProfileHeader();

    return (
        <View style={styles.headerContainer}>
            <LinearGradient
                style={styles.pictureGradient}
                colors={[COLORS.secondary, COLORS.tertiary]}
            >
                <View style={styles.pictureWhiteBg}>
                    {isEditing && (
                        <TouchableOpacity
                            style={styles.fileButtonOpacity}
                            onPress={pickProfilePicture}
                        >
                            <LinearGradient
                                style={styles.fileButtonContainer}
                                colors={[COLORS.secondary, COLORS.tertiary]}
                            >
                                <FontAwesome
                                    style={styles.fileButtonIcon}
                                    name="file"
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                    {isEditing && (
                        <TouchableOpacity style={styles.statusButtonOpacity}>
                            <LinearGradient
                                style={styles.statusButtonContainer}
                                colors={[COLORS.secondary, COLORS.tertiary]}
                            >
                                <Text style={styles.statusButtonText}>
                                    Edit status
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    )}
                    {newProfilePicture !== undefined ? (
                        <Image source={newProfilePicture} />
                    ) : (
                        <Image style={styles.pictureStyle} source={url} />
                    )}
                </View>
                {travelerType !== undefined && (
                    <View>
                        <Text>{onTravel}</Text>
                        <Text>{travelerType}</Text>
                    </View>
                )}
            </LinearGradient>
            <View style={styles.userDetails}>
                <Text style={styles.detailsElement}>{firstname}</Text>
                <Text style={styles.detailsElement}>{age}</Text>
            </View>
        </View>
    );
};

export default ProfileHeader;
