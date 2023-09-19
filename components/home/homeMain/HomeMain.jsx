import { View } from "react-native";
import Matcher from "../matcher/Matcher";
import Profile from "../profile/Profile";
import Explore from "../explore/Explore";

const HomeMain = ({ homeState }) => {
    return (
        <View style={{ flex: 1 }}>
            {homeState === "matcher" && <Matcher />}
            {homeState === "profile" && <Profile />}
            {homeState === "explore" && <Explore />}
        </View>
    );
};

export default HomeMain;
