import { useState } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { ageCalculator } from "../../../utils/functions";

import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileMain from "./profileMain/ProfileMain";
import ProfileForm from "./profileForm/ProfileForm";

const Profile = () => {
    const userData = useSelector((state) => state.userDataReducer.userData);
    const [isEditing, setIsEditing] = useState(false);
    const [onTravel, setOnTravel] = useState(userData.onTravel);
    const [travelerType, setTravelerType] = useState(userData.travelerType);
    const age = ageCalculator(userData.birth);

    const handleEdit = () => setIsEditing((state) => !state);

    return (
        <ScrollView style={{ flex: 1 }}>
            <ProfileHeader
                isEditing={isEditing}
                profilePicture={userData.profilePicture}
                firstname={userData.firstname}
                age={age}
                onTravel={onTravel}
                travelerType={travelerType}
                setOnTravel={setOnTravel}
                setTravelerType={setTravelerType}
            />
            {isEditing ? (
                <ProfileForm
                    setIsEditing={setIsEditing}
                    onTravel={onTravel}
                    travelerType={travelerType}
                />
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
