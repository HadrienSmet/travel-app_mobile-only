import React from "react";
import { Text, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./popuForm.style";
import { travelerTypeArray } from "../../../../data/travelerTypeArray";

const whithWhomArray = [
    "In couple",
    "Solo trip",
    "With colleagues",
    "With my family",
    "With my friends",
];

const PopupForm = ({
    title,
    type,
    withWhom,
    setTitle,
    setType,
    setWithWhom,
}) => {
    return (
        <View style={styles.popupLayout}>
            <View style={styles.popupContainer}>
                <View style={styles.popupBasicDivision}>
                    <Text style={styles.popupSecondTitle}>
                        Give a title to your trip!
                    </Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Thaïland 2018"
                        style={[
                            styles.popupInputBox,
                            styles.popupInputElement,
                            { paddingHorizontal: 24 },
                        ]}
                    />
                </View>
                <View style={styles.popupBasicDivision}>
                    <Text style={styles.popupSecondTitle}>
                        What kind of trip?
                    </Text>
                    <SelectList
                        boxStyles={styles.popupInputBox}
                        inputStyles={styles.popupInputElement}
                        data={travelerTypeArray}
                        search={false}
                        save="value"
                        setSelected={(val) => setType(val)}
                        label="Trip type"
                        placeholder={
                            type === undefined
                                ? "Select the kind of your trip"
                                : type
                        }
                    />
                </View>
                <View style={styles.popupBasicDivision}>
                    <Text style={styles.popupSecondTitle}>
                        With whom did you made that trip?
                    </Text>
                    <SelectList
                        boxStyles={styles.popupInputBox}
                        inputStyles={styles.popupInputElement}
                        data={whithWhomArray}
                        search={false}
                        save="value"
                        setSelected={(val) => setWithWhom(val)}
                        label="With whom"
                        placeholder={
                            withWhom === undefined ? "Select option" : withWhom
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default PopupForm;
