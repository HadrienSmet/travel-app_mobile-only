import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import MapView, { Marker } from "react-native-maps";
import styles from "./tipsForm.style";
import { COLORS, SHADES } from "../../../../../../../../constants";

const tipsTypeArray = [
    "Something I advise to eat",
    "Something I advise to do",
    "Something I advise to see",
    "Something you should avoid",
    "Something you should know",
    "Something you should not do",
];

const TipsForm = ({ isAccordionOpen, closeAccordion, pushTripTips }) => {
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
    return (
        <View
            style={[styles.tipsForm, !isAccordionOpen && { display: "none" }]}
        >
            <View style={styles.basicDivision}>
                <Text style={styles.secondTitle}>What kind of tips?</Text>
                <View>
                    <SelectList
                        data={tipsTypeArray}
                        boxStyles={styles.inputBox}
                        inputStyles={{ color: COLORS.white }}
                        save="value"
                        setSelected={(val) => setTipsType(val)}
                        search={false}
                        label="Tips type"
                    />
                    <Text
                        style={{
                            position: "absolute",
                            top: 12,
                            color: SHADES.black06,
                        }}
                    >
                        {tipsType === undefined
                            ? "Select a kind of tips"
                            : tipsType}
                    </Text>
                </View>
            </View>
            <View style={styles.basicDivision}>
                <Text style={styles.secondTitle}>
                    Do you have a place to relate with your tips?
                </Text>
                <MapView
                    style={styles.mapContainer}
                    // initialRegion={{
                    //     latitude: 37.78825,
                    //     longitude: -122.4324,
                    //     latitudeDelta: 0.0922,
                    //     longitudeDelta: 0.0421,
                    // }}

                    onLongPress={hadLocationPin}
                >
                    {tipsLocation.latitude !== undefined && (
                        <Marker
                            coordinate={
                                tipsLocation
                                    ? tipsLocation
                                    : { longitude: 0, latitude: 0 }
                            }
                            title={tipsType}
                            description={tipsContent ? tipsContent : ""}
                            style={{ zIndex: 100 }}
                        />
                    )}
                </MapView>
            </View>
            <View style={styles.basicDivision}>
                <Text style={styles.secondTitle}>Something to add?</Text>
                <TextInput
                    value={tipsContent}
                    onChangeText={setTipsContent}
                    placeholder="Add a comment..."
                    multiline={true}
                    numberOfLines={6}
                    style={styles.textAreaStyle}
                />
            </View>
            <TouchableOpacity onPress={handleAddTips}>
                <Text>Add tips</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TipsForm;
