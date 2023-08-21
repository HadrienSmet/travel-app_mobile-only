import { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./tripTipsForm.style";
import { COLORS } from "../../../../../../../../constants";

const adviseArray = ["Something to do", "Something to eat", "Something to see"];
const warningArray = [
    "Something you should avoid",
    "Something you should know",
    "Something you should not do",
];

const TripTipsForm = ({ formBackground, tipsType, tipsLocation, pushTips }) => {
    const [tipsContent, setTipsContent] = useState("");
    const [tipsAbout, setTipsAbout] = useState("");
    const currentArray = tipsType === "warning" ? warningArray : adviseArray;

    const handleConfirm = () => {
        if (tipsAbout !== undefined) {
            let data = {
                location: tipsLocation,
                type: tipsType,
                about: tipsAbout,
                content: tipsContent,
            };
            pushTips(data);
        }
    };

    return (
        <ScrollView
            contentContainerStyle={[
                styles.tripTipsForm,
                { backgroundColor: formBackground },
            ]}
        >
            <Text style={styles.mainTitle}>
                Tell us more about your {tipsType}
            </Text>
            <View style={styles.basicView}>
                <Text style={styles.secondTitle}>What kind of {tipsType}?</Text>
                <SelectList
                    boxStyles={styles.listContainer}
                    inputStyles={styles.listContent}
                    dropdownStyles={{
                        backgroundColor: COLORS.white,
                        borderWidth: 0,
                    }}
                    data={currentArray}
                    search={false}
                    save="value"
                    setSelected={(val) => setTipsAbout(val)}
                    label="tips type"
                    placeholder={`Select the type of your ${tipsType}`}
                />
            </View>
            <View style={styles.basicView}>
                <Text style={styles.secondTitle}>
                    If you want to develop...
                </Text>
                <TextInput
                    multiline
                    numberOfLines={6}
                    value={tipsContent}
                    onChangeText={setTipsContent}
                    placeholder={`My ${tipsType} is...`}
                    style={[styles.textareaStyle, { textAlign: "top" }]}
                />
            </View>
            <TouchableOpacity
                style={styles.confirmButtonContainer}
                onPress={handleConfirm}
            >
                <Text style={styles.confirmButtonContent}>Confirm</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default TripTipsForm;
