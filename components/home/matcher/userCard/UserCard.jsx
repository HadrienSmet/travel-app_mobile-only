import { View } from "react-native";
import UserHeader from "./userHeader/UserHeader";
import UserMain from "./userMain/UserMain";
import UserFooter from "./userFooter/UserFooter";
import { useSelector } from "react-redux";
import { COLORS } from "../../../../constants";

const UserCard = () => {
    const userData = useSelector((state) => state.userDataReducer.userData);
    return (
        <View style={{ backgroundColor: COLORS.white }}>
            <UserHeader username={userData.firstname} />
            <UserMain />
            <UserFooter />
        </View>
    );
};

export default UserCard;
