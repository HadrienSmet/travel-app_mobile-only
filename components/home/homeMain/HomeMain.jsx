import { View } from "react-native";
import UserCard from "../matcher/userCard/UserCard";
import ButtonsRow from "../matcher/buttonsRow/ButtonsRow";

const HomeMain = () => {
    return (
        <View>
            <View>
                <UserCard />
                <ButtonsRow />
            </View>
        </View>
    );
};

export default HomeMain;
