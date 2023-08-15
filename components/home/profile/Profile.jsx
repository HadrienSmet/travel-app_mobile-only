import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileMain from "./profileMain/ProfileMain";
import { useState } from "react";
import ProfileForm from "./profileForm/ProfileForm";

const Profile = () => {
    const userData = useSelector((state) => state.newUserData.userData);
    const [isEditing, setIsEditing] = useState(false);
    const [onTravel, setOnTravel] = useState(userData.onTravel);
    const [travelerType, setTravelerType] = useState(userData.travelerType);

    const handleEdit = () => setIsEditing((state) => !state);

    return (
        <ScrollView style={{ flex: 1 }}>
            <ProfileHeader
                isEditing={isEditing}
                profilePicture={userData.profilePicture}
                firstname={userData.firstname}
                age={userData.age}
                onTravel={onTravel}
                travelerType={travelerType}
                setOnTravel={setOnTravel}
                setTravelerType={setTravelerType}
            />
            {isEditing ? (
                <ProfileForm />
            ) : (
                <ProfileMain
                    description={userData.description}
                    dreamTrips={userData.dreamTrips}
                    previousTrips={userData.previousTrips}
                    albums={userData.albums}
                    friends={userData.friends}
                    handleEdit={handleEdit}
                />
            )}
        </ScrollView>
    );
};

export default Profile;
