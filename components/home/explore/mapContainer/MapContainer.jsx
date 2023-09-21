import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../../../constants";
import { axiosGetEveryTips } from "../../../../utils/axios/tips/axiosGetEveryTips";
import { axiosGetUserTips } from "../../../../utils/axios/tips/axiosGetUserTips";
import { setEveryTips, setUserTips } from "../../../../features/tipsData.slice";

const windowHeight = Dimensions.get("window").height;

const MapContainer = ({
    isLookingSomething,
    handleLongPress,
    handleSelectedTips,
}) => {
    const tipsData = useSelector((state) => state.tipsDataReducer.tipsData);
    const [displayedTips, setDisplayedTips] = useState([]);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataReducer.userData);

    const handlePinColor = (tips) =>
        tips.type !== "advice" ? COLORS.warning : COLORS.advice;

    useEffect(() => {
        if (isLookingSomething !== "") {
            axiosGetEveryTips(10, isLookingSomething)
                .then((res) => dispatch(setEveryTips(res.data)))
                .catch((err) => alert(err));
        } else {
            axiosGetEveryTips(10)
                .then((res) => dispatch(setEveryTips(res.data)))
                .catch((err) => alert(err));
            axiosGetUserTips(userData.userId)
                .then((res) => dispatch(setUserTips(res.data)))
                .catch((err) => alert(err));
        }
    }, [isLookingSomething]);

    useEffect(() => {
        setDisplayedTips(tipsData.everyTips);
    }, [tipsData]);
    return (
        <MapView
            onLongPress={handleLongPress}
            style={{ width: "100%", height: windowHeight - 140 }}
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
