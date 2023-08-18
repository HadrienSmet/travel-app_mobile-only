import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { COLORS, SHADES, SIZES } from "../../../../../../../constants";
import MapView from "react-native-maps";

const tipsTypeArray = [
    "Something I advise to eat",
    "Something I advise to do",
    "Something I advise to see",
    "Something you should avoid",
    "Something you should know",
    "Something you should not do",
];

const styles = StyleSheet.create({
    modalSecondTitle: {
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    modalBasicDivision: {
        gap: 4,
    },
    mapContainer: {
        width: "100%",
        height: 140,
    },
    textAreaStyle: {
        borderWidth: 1,
        borderColor: SHADES.black04,
        borderRadius: 8,
        textAlignVertical: "top",
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
});

const TipsDivision = () => {
    const [tipsType, setTipsType] = useState(undefined);
    const [tipsLocation, setTipsLocation] = useState(undefined);
    const [tipsContent, setTipsContet] = useState(undefined);

    const handleAddTips = () => {
        console.log(tipsType);
        console.log(tipsLocation);
        console.log(tipsContent);
    };

    return (
        <View>
            <Text>Some tips to share about your trip?</Text>
            <View>
                <Text>What kind of tips?</Text>
                <SelectList
                    data={tipsTypeArray}
                    save="value"
                    setSelected={(val) => setTipsType(val)}
                    search={false}
                    label="Tips type"
                />
            </View>
            <View style={styles.modalBasicDivision}>
                <Text style={styles.modalSecondTitle}>
                    Do you have a place to relate with your tips?
                </Text>
                <MapView style={styles.mapContainer} />
            </View>
            <View style={styles.modalBasicDivision}>
                <Text style={styles.modalSecondTitle}>Something to add?</Text>
                <TextInput
                    value={tipsContent}
                    onChangeText={setTipsContet}
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

export default TipsDivision;
