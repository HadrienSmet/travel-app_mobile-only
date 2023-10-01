import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../constants";
import AppFooter from "../components/common/appFooter/AppFooter";
import AppHeader from "../components/common/appHeader/AppHeader";
import HomeMain from "../components/home/homeMain/HomeMain";
import { useKeyboardStatus } from "../hooks/useKeyboardStatus";
import { useUserLocation } from "../hooks/useUserLocation";
import { useDispatch, useSelector } from "react-redux";
import { setUserCoordinates } from "../features/userData.slice";
import { axiosPatchUser } from "../utils/axios/user";

const useHome = () => {
    const [homeState, setHomeState] = useState("matcher");
    const keyboardStatus = useKeyboardStatus();
    const location = useUserLocation();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataReducer.userData);

    useEffect(() => {
        console.log(location);
        if (location !== undefined && location.coords) {
            const coordinatesObj = {
                coordinates: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                },
            };
            axiosPatchUser(userData._id, coordinatesObj, userData.token)
                .then((res) => console.log(res.data))
                .catch((err) => alert(err));
            coordinatesObj.coordinates.latitudeDelta = 2;
            coordinatesObj.coordinates.longitudeDelta = 2;
            dispatch(setUserCoordinates(coordinatesObj));
        }
    }, [location]);

    return {
        homeState,
        keyboardStatus,
        setHomeState,
    };
};

const home = () => {
    const { homeState, keyboardStatus, setHomeState } = useHome();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <AppHeader />
            <HomeMain homeState={homeState} />
            {keyboardStatus === "hidden" && (
                <AppFooter homeState={homeState} setHomeState={setHomeState} />
            )}
        </SafeAreaView>
    );
};

export default home;
