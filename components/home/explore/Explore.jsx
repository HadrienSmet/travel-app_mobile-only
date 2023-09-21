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

const useExploreDisplayedTips = () => {
    const [selectedTips, setSelectedTips] = useState(undefined);
    const [isLookingSomething, setIsLookSomething] = useState("");

    const handleSelectedTips = (tips) => setSelectedTips(tips);
    const handleIsLookingSomething = (about) =>
        setIsLookSomething((state) => (state === about ? "" : about));

    return {
        selectedTips,
        isLookingSomething,
        handleIsLookingSomething,
        handleSelectedTips,
    };
};

const useExploreAddTips = () => {
    const [pinState, setPinState] = useState("");
    const [formState, setFormState] = useState("");
    const [pinLocation, setPinLocation] = useState(undefined);

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

    return {
        formState,
        pinLocation,
        handleFormState,
        handleLongPress,
        handlePinState,
    };
};

const Explore = () => {
    const {
        selectedTips,
        isLookingSomething,
        handleIsLookingSomething,
        handleSelectedTips,
    } = useExploreDisplayedTips();
    const {
        formState,
        pinLocation,
        handleFormState,
        handleLongPress,
        handlePinState,
    } = useExploreAddTips();
    return (
        <View>
            <MapContainer
                isLookingSomething={isLookingSomething}
                handleLongPress={handleLongPress}
                handleSelectedTips={handleSelectedTips}
            />
            <ButtonsContainer
                isLookingSomething={isLookingSomething}
                handlePinState={handlePinState}
                handleIsLookingSomething={handleIsLookingSomething}
            />
            {formState !== "" && (
                <FormsContainer
                    tipsLocation={pinLocation}
                    tipsType={formState}
                    handleFormState={handleFormState}
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
