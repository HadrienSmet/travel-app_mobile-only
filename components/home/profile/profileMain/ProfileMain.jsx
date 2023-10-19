import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import TripsDisplayer from "./tripsDisplayer/TripsDisplayer";
import { COLORS } from "../../../../constants";
import styles from "./profileMain.style";

const ProfileMain = ({ handleEdit }) => {
    const userData = useSelector((state) => state.userDataReducer.userData);

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
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                {userData.previousTrips.length !== 0 && <TripsDisplayer />}
                <TouchableOpacity
                    style={{
                        borderColor: COLORS.primary,
                        borderRadius: 40,
                        borderWidth: 2,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 8,
                        paddingVertical: 8,
                        width: "48%",
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.primary,
                        }}
                    >
                        My albums
                    </Text>
                    <FontAwesome
                        style={{
                            color: COLORS.primary,
                        }}
                        name="images"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleEdit}>
                <Text style={styles.buttonTextStyle}>Edit your profile</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ProfileMain;
