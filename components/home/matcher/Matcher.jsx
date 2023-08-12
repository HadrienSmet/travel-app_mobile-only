import { View } from "react-native";
import UserCard from "./userCard/UserCard";
import ButtonsRow from "./buttonsRow/ButtonsRow";

const Matcher = () => {
    return (
        <View>
            <UserCard />
            <ButtonsRow />
        </View>
    );
};

export default Matcher;
