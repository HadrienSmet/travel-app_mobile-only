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
    const [selectedTips, setSelectedTips] = useState(undefined);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const dispatch = useDispatch();

    const handleSelectedTips = (tips) => setSelectedTips(tips);

    useEffect(() => {
        axiosGetEveryTips()
            .then((res) => dispatch(setEveryTips(res.data)))
            .catch((err) => alert(err));
        axiosGetUserTips(userData.userId)
            .then((res) => dispatch(setUserTips(res.data)))
            .catch((err) => alert(err));
    }, []);

    return {
        selectedTips,
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

const useExploreFilters = () => {
    const [isLookingSomething, setIsLookSomething] = useState("");

    const handleIsLookingSomething = (state) => setIsLookSomething(state);

    useEffect(() => {
        console.log(isLookingSomething);
    }, [isLookingSomething]);

    return { isLookingSomething, handleIsLookingSomething };
};

const Explore = () => {
    const { selectedTips, handleSelectedTips } = useExplore();
    const { isLookingSomething, handleIsLookingSomething } =
        useExploreFilters();
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
                handleLongPress={handleLongPress}
                handleSelectedTips={handleSelectedTips}
                pinLocation={pinLocation}
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
