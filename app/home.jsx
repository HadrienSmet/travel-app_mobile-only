import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { useKeyboardStatus, useUserLocation } from "../hooks";

import AppFooter from "../components/common/appFooter/AppFooter";
import AppHeader from "../components/common/appHeader/AppHeader";
import HomeMain from "../components/home/homeMain/HomeMain";
import { COLORS } from "../constants";
// import { setUserCoordinates } from "../features/userData.slice";
// import { axiosPatchUser } from "../utils/axios/user";

const useHome = () => {
    const [homeState, setHomeState] = useState("matcher");
    useUserLocation();
    const keyboardStatus = useKeyboardStatus();
    // const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataReducer.userData);

    // useEffect(() => {
    //     if (latitude && longitude) {
    //         const coordinatesObj = { coordinates: { latitude, longitude } };
    //         console.log("coordinatesObj");
    //         console.log(coordinatesObj);
    //         axiosPatchUser(userData._id, coordinatesObj, userData.token)
    //             .then(() => {
    //                 coordinatesObj.coordinates.latitudeDelta = 2;
    //                 coordinatesObj.coordinates.longitudeDelta = 2;
    //                 dispatch(setUserCoordinates(coordinatesObj));
    //             })
    //             .catch((err) => alert(err));
    //     }
    // }, [latitude, longitude]);

    useEffect(() => {
        console.log("from home");
        console.log(userData);
    }, [userData]);

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
