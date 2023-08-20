import { useEffect, useState } from "react";
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import styles from "./tipsDivision.style";
import { COLORS, SHADES } from "../../../../../../../constants";
import TipsHeader from "./tipsHeader/TipsHeader";
import TipsForm from "./tipsForm/TipsForm";
import TipsCard from "./tipsCard/TipsCard";

const TipsDivision = ({
    isAccordionOpen,
    tripTips,
    closeAccordion,
    toggleAccordion,
    pushTripTips,
}) => {
    const [tipsType, setTipsType] = useState(undefined);
    const [tipsLocation, setTipsLocation] = useState({
        latitude: undefined,
        longitude: undefined,
    });
    const [tipsContent, setTipsContent] = useState(undefined);

    const hadLocationPin = (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        setTipsLocation({ latitude, longitude });
    };
    const resetComponentState = () => {
        setTipsType(() => undefined);
        setTipsLocation({
            latitude: undefined,
            longitude: undefined,
        });
        setTipsContent(undefined);
    };

    const handleAddTips = () => {
        const data = {
            tipsType,
            tipsLocation,
            tipsContent,
        };
        pushTripTips(data);
        resetComponentState();
        closeAccordion();
    };

    useEffect(() => {
        console.log(tipsType);
    }, [tipsContent]);

    return (
        <View>
            <TipsHeader toggleAccordion={toggleAccordion} />
            <TipsForm
                isAccordionOpen={isAccordionOpen}
                closeAccordion={closeAccordion}
                pushTripTips={pushTripTips}
            />
            {tripTips.length !== 0 &&
                tripTips.map((tips, index) => (
                    <TipsCard tips={tips} key={index} />
                ))}
        </View>
    );
};

export default TipsDivision;
