import { View } from "react-native";
import Matcher from "../matcher/Matcher";
import Profile from "../profile/Profile";

const HomeMain = ({ homeState }) => {
    return (
        <View>
            {homeState === "matcher" && <Matcher />}
            {homeState === "profile" && <Profile />}
        </View>
    );
};

export default HomeMain;
