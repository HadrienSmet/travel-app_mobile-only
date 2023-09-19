import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapContainer from "./mapContainer/MapContainer";
import ButtonsContainer from "./buttonsContainer/ButtonsContainer";
import FormsContainer from "./formsContainer/FormsContainer";
import { axiosGetEveryTips } from "../../../utils/axios/tips/axiosGetEveryTips";
import { useDispatch, useSelector } from "react-redux";
import { setEveryTips, setUserTips } from "../../../features/tipsData.slice";
import { axiosGetUserTips } from "../../../utils/axios/tips/axiosGetUserTips";
import TipsDetailsContainer from "./tipsDetailsContainer/TipsDetailsContainer";

const useExplore = () => {
    const [pinState, setPinState] = useState("");
    const [formState, setFormState] = useState("");
    const [pinLocation, setPinLocation] = useState(undefined);
    const [selectedTips, setSelectedTips] = useState(undefined);

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataReducer.userData);
    const tipsData = useSelector((state) => state.tipsDataReducer.tipsData);

    const handleSelectedTips = (tips) => setSelectedTips(tips);
    const handleFormState = (state) => setFormState(state);
    const handlePinState = (state) => setPinState(state);
    const handlePinLocation = (e) => {
        const { longitude, latitude } = e.nativeEvent.coordinate;
        setPinLocation({ longitude, latitude });
    };

    const handleLongPress = (e) => {
        switch (pinState) {
            case "advice":
                handlePinLocation(e);
                handleFormState(pinState);
                break;
            case "warning":
                handlePinLocation(e);
                handleFormState(pinState);
                break;
            default:
                return null;
        }
    };

    useEffect(() => {
        axiosGetEveryTips()
            .then((res) => dispatch(setEveryTips(res.data)))
            .catch((err) => alert(err));
        axiosGetUserTips(userData.userId)
            .then((res) => dispatch(setUserTips(res.data)))
            .catch((err) => alert(err));
    }, []);
    useEffect(() => {
        console.log(tipsData);
    }, [tipsData]);

    return {
        formState,
        pinLocation,
        selectedTips,
        handleLongPress,
        handlePinState,
        handleSelectedTips,
    };
};

const Explore = () => {
    const {
        formState,
        pinLocation,
        selectedTips,
        handleLongPress,
        handlePinState,
        handleSelectedTips,
    } = useExplore();
    return (
        <View>
            <MapContainer
                handleLongPress={handleLongPress}
                handleSelectedTips={handleSelectedTips}
                pinLocation={pinLocation}
            />
            <ButtonsContainer handlePinState={handlePinState} />
            {formState !== "" && (
                <FormsContainer
                    tipsLocation={pinLocation}
                    tipsType={formState}
                />
            )}
            {selectedTips !== undefined && (
                <TipsDetailsContainer
                    handleSelectedTips={handleSelectedTips}
                    currentTips={selectedTips}
                />
            )}
        </View>
    );
};

export default Explore;
