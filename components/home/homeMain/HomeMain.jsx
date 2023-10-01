import { View } from "react-native";
import Matcher from "../matcher/Matcher";
import Profile from "../profile/Profile";
import Explore from "../explore/Explore";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const HomeMain = ({ homeState }) => {
    const userData = useSelector((state) => state.userDataReducer.userData);
    useEffect(() => {
        console.log(userData);
    }, [userData]);
    return (
        <View style={{ flex: 1 }}>
            {homeState === "matcher" && <Matcher />}
            {homeState === "profile" && <Profile />}
            {homeState === "explore" && <Explore />}
        </View>
    );
};

export default HomeMain;
