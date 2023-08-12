import { Text, View, TouchableOpacity } from "react-native";
import styles from "./profileMain.style";

const ProfileMain = ({
    description,
    dreamTrips,
    previousTrips,
    albums,
    friends,
    handleEdit,
}) => {
    return (
        <View style={styles.mainContainer}>
            {description !== undefined ? (
                <Text>{description}</Text>
            ) : (
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleEdit}
                >
                    <Text style={styles.buttonTextStyle}>
                        Complete your profile
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ProfileMain;
