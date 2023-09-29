import React from "react";
import { Text, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "../tripForm.style";
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
        <View>
            <View style={styles.modalBasicDivision}>
                <Text style={styles.modalSecondTitle}>
                    Give a title to your trip!
                </Text>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Thaïland 2018"
                    style={[
                        styles.modalInputBox,
                        styles.modalInputElement,
                        { paddingHorizontal: 24 },
                    ]}
                />
            </View>
            <View style={styles.modalBasicDivision}>
                <Text style={styles.modalSecondTitle}>What kind of trip?</Text>
                <SelectList
                    boxStyles={styles.modalInputBox}
                    inputStyles={styles.modalInputElement}
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
            <View style={styles.modalBasicDivision}>
                <Text style={styles.modalSecondTitle}>
                    With whom did you made that trip?
                </Text>
                <SelectList
                    boxStyles={styles.modalInputBox}
                    inputStyles={styles.modalInputElement}
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
    );
};

export default PopupForm;
