import React from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { COLORS } from "../../../../constants";

const windowHeight = Dimensions.get("window").height;

const MapContainer = ({ handleLongPress, handleSelectedTips, pinLocation }) => {
    const tipsData = useSelector((state) => state.tipsDataReducer.tipsData);
    return (
        <MapView
            onLongPress={handleLongPress}
            style={{ width: "100%", height: windowHeight - 140 }}
        >
            {tipsData.everyTips.length !== 0 &&
                tipsData.everyTips.map((tips, index) => (
                    <Marker
                        onPress={() => handleSelectedTips(tips)}
                        key={`tips-${index}`}
                        coordinate={tips.location}
                        pinColor={
                            tips.type === "warning"
                                ? COLORS.warning
                                : COLORS.advice
                        }
                    />
                ))}
        </MapView>
    );
};

export default MapContainer;
