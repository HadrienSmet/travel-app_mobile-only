import { useState } from "react";
import { Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const tipsTypeArray = [
    "Something I advise to eat",
    "Something I advise to do",
    "Something I advise to see",
    "Something you should avoid",
    "Something you should know",
    "Something you should not do",
];

const TipsDivision = () => {
    const [tipsType, setTipsType] = useState(undefined);

    return (
        <View>
            <Text>Some tips to share about your trip?</Text>
            <View>
                <Text>What kind of trip?</Text>
                <SelectList
                    data={tipsTypeArray}
                    save="value"
                    setSelected={(val) => setTipsType(val)}
                    search={false}
                    label="Tips type"
                />
            </View>
        </View>
    );
};

export default TipsDivision;
