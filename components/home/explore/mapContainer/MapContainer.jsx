import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../../../constants";
import { setEveryTips, setUserTips } from "../../../../features/tipsData.slice";
import {
    axiosGetEveryTips,
    axiosGetUserTips,
} from "../../../../utils/axios/tips";

const windowHeight = Dimensions.get("window").height;

const useMapContainer = (isLookingSomething) => {
    const tipsData = useSelector((state) => state.tipsDataReducer.tipsData);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const [displayedTips, setDisplayedTips] = useState([]);
    const [mapScope, setMapScope] = useState({
        latitude: userData.coordinates.latitude,
        longitude: userData.coordinates.longitude,
        latitudeDelta: 2,
        longitudeDelta: 2,
    });

    const dispatch = useDispatch();

    const handleRegionChange = (region) => setMapScope(region);

    useEffect(() => {
        console.log(mapScope);
        if (isLookingSomething !== "") {
            axiosGetEveryTips(10, mapScope, isLookingSomething)
                .then((res) => dispatch(setEveryTips(res.data)))
                .catch((err) => alert(err));
        } else {
            axiosGetEveryTips(10, mapScope)
                .then((res) => dispatch(setEveryTips(res.data)))
                .catch((err) => alert(err));
            axiosGetUserTips(userData.userId)
                .then((res) => dispatch(setUserTips(res.data)))
                .catch((err) => alert(err));
        }
    }, [isLookingSomething, mapScope]);

    useEffect(() => {
        console.log(mapScope);
    }, [mapScope]);

    useEffect(() => {
        setDisplayedTips(tipsData.everyTips);
    }, [tipsData]);

    return {
        displayedTips,
        mapScope,
        handleRegionChange,
    };
};

const MapContainer = ({
    isLookingSomething,
    handleLongPress,
    handleSelectedTips,
}) => {
    const { displayedTips, mapScope, handleRegionChange } =
        useMapContainer(isLookingSomething);
    const { latitude, longitude, latitudeDelta, longitudeDelta } = mapScope;

    const handlePinColor = (tips) =>
        tips.type !== "advice" ? COLORS.warning : COLORS.advice;

    return (
        <MapView
            onLongPress={handleLongPress}
            onRegionChangeComplete={handleRegionChange}
            style={{ width: "100%", height: windowHeight - 140 }}
            region={{
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta,
            }}
        >
            {displayedTips.length !== 0 &&
                displayedTips.map((tips) => (
                    <Marker
                        onPress={() => handleSelectedTips(tips)}
                        key={tips._id}
                        coordinate={tips.location}
                        pinColor={handlePinColor(tips)}
                    />
                ))}
        </MapView>
    );
};

export default MapContainer;
