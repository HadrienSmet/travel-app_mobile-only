import { View } from "react-native";
import { useSelector } from "react-redux";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileMain from "./profileMain/ProfileMain";
import { useState } from "react";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const userData = useSelector((state) => state.newUserData.userData);

    const handleEdit = () => setIsEditing((state) => !state);

    return (
        <View>
            <ProfileHeader
                isEditing={isEditing}
                profilePicture={userData.profilePicture}
                firstname={userData.firstname}
                age={userData.age}
                onTravel={userData.onTravel}
                travelerType={userData.travelerType}
            />
            <ProfileMain
                description={userData.description}
                dreamTrips={userData.dreamTrips}
                previousTrips={userData.previousTrips}
                albums={userData.albums}
                friends={userData.friends}
                handleEdit={handleEdit}
            />
        </View>
    );
};

export default Profile;
