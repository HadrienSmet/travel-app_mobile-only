import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./profileMain.style";
import { useSelector } from "react-redux";
import PreviousTripCard from "./previousTripCard/PreviousTripCard";

const ProfileMain = ({ handleEdit }) => {
    const userData = useSelector((state) => state.newUserData.userData);

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
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
            {userData.previousTrips.length !== 0 && (
                <View>
                    <Text>Previous trips :</Text>
                    {userData.previousTrips.map((trip, index) => (
                        <PreviousTripCard trip={trip} index={index} />
                    ))}
                </View>
            )}
            <TouchableOpacity style={styles.buttonStyle} onPress={handleEdit}>
                <Text style={styles.buttonTextStyle}>Edit your profile</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProfileMain;
