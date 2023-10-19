import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useKeyboardStatus } from "../hooks";

import AppFooter from "../components/common/appFooter/AppFooter";
import AppHeader from "../components/common/appHeader/AppHeader";
import HomeMain from "../components/home/homeMain/HomeMain";
import { COLORS } from "../constants";
import { setUserCoordinates } from "../features/userData.slice";
import { axiosPatchUser } from "../utils/axios/user";
import * as Location from "expo-location";

const useHome = () => {
    const [homeState, setHomeState] = useState("matcher");
    const [isNewLocation, setIsNewLocation] = useState(false);
    const [location, setLocation] = useState(null);
    const keyboardStatus = useKeyboardStatus();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataReducer.userData);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();
    }, []);

    useEffect(() => {
        if (
            location &&
            location.latitude &&
            location.longitude &&
            !isNewLocation
        ) {
            const coordsObj = {
                coordinates: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                },
            };
            axiosPatchUser(userData._id, coordsObj, userData.token)
                .then(() => {
                    coordsObj.coordinates.latitudeDelta = 2;
                    coordsObj.coordinates.longitudeDelta = 2;
                    dispatch(setUserCoordinates(coordsObj.coordinates));
                    setIsNewLocation(true);
                })
                .catch((err) => alert(err));
        }
    }, [location, isNewLocation]);

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
