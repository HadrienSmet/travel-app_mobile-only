import { Image, Text, View } from "react-native";
import { API_URL } from "@env";
import ProfilePicturePicker from "../profilePicturePicker/ProfilePicturePicker";
import styles from "./profilePictureMain.style";
import { useEffect } from "react";

const ProfilePictureMain = () => {
    useEffect(() => {
        console.log("api url: " + API_URL);
    }, []);

    return (
        <View style={styles.profilePictureMain}>
            <Image
                blurRadius={5}
                style={styles.profilePictureBackgroundImage}
                source={require("../../../../assets/images/post-bangladesh.jpg")}
            />
            <View style={styles.profilePictureContent}>
                <View>
                    <Text style={styles.profilePictureTitle}>
                        Define your profile picture!
                    </Text>
                    {/* <Text style={styles.personalsSubTitle}>
                        Define your email and password
                    </Text> */}
                </View>
                <ProfilePicturePicker />
            </View>
        </View>
    );
};

export default ProfilePictureMain;
