import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { axiosPatchUser } from "../utils/axios/user";
import { setUserCoordinates } from "../features/userData.slice";

export const useUserLocation = () => {
    const [location, setLocation] = useState(null);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                alert("This app require your location");
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync();
            setLocation(currentLocation);
        };
        getPermissions();
    }, []);
    console.log("hook is getting called");
    if (location) {
        const { latitude, longitude } = location.coords;
        const coordinatesObj = { coordinates: { latitude, longitude } };
        console.log("going to patch");
        axiosPatchUser(userData._id, coordinatesObj, userData.token)
            .then(() => {
                console.log("patch succeded lets change redux");
                coordinatesObj.coordinates.latitudeDelta = 2;
                coordinatesObj.coordinates.longitudeDelta = 2;
                dispatch(setUserCoordinates(coordinatesObj));
            })
            .catch((err) => alert(err));
    }
};
