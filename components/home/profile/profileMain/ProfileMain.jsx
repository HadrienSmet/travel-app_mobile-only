import { Text, View, TouchableOpacity } from "react-native";
import styles from "./profileMain.style";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProfileMain = ({ handleEdit }) => {
    const userData = useSelector((state) => state.newUserData.userData);

    useEffect(() => {
        console.log(userData.albums);
        console.log(userData.albums.length);
    }, []);

    return (
        <View style={styles.mainContainer}>
            {userData.purpose !== undefined && (
                <Text style={styles.profileText}>{userData.purpose}</Text>
            )}
            {userData.bio !== undefined && (
                <Text style={styles.profileText}>{userData.bio}</Text>
            )}
            {userData.languages !== undefined && (
                <View style={styles.rowStyle}>
                    <Text style={styles.pageElementColor}>Languages :</Text>
                    <Text style={styles.pageElementColor}>
                        {userData.languages.join(", ")}
                    </Text>
                </View>
            )}
            {userData.dreamTrips !== undefined && (
                <View style={styles.rowStyle}>
                    <Text style={styles.pageElementColor}>Dream trips :</Text>
                    <Text style={styles.pageElementColor}>
                        {userData.dreamTrips.join(", ")}
                    </Text>
                </View>
            )}
            <TouchableOpacity style={styles.buttonStyle} onPress={handleEdit}>
                <Text style={styles.buttonTextStyle}>
                    Complete your profile
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileMain;
