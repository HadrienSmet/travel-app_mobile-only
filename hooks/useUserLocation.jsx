import * as Location from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
    const [location, setLocation] = useState(null);

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

    if (location) return location;
};
