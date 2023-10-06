import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { patchTrip } from "../../../../../../features/tripData.slice";
import { travelerTypeArray } from "../../../../../../data/travelerTypeArray";
import ColorDivision from "./colorDivision/ColorDivision";
import styles from "./popuForm.style";

const whithWhomArray = [
    "In couple",
    "Solo trip",
    "With colleagues",
    "With my family",
    "With my friends",
];

const usePopupForm = (closePopup) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [withWhom, setWithWhom] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState({
        red: 0,
        green: 0,
        blue: 0,
    });

    const handleRed = (e) =>
        setColor((state) => ({
            ...state,
            red: Math.floor(e),
        }));
    const handleGreen = (e) =>
        setColor((state) => ({
            ...state,
            green: Math.floor(e),
        }));
    const handleBlue = (e) =>
        setColor((state) => ({
            ...state,
            blue: Math.floor(e),
        }));
    const handleConfirm = () => {
        const data = {
            title,
            withWhom,
            type,
            color: `rgb(${color.red},${color.green},${color.blue})`,
        };
        dispatch(patchTrip(data));
        closePopup();
    };
    return {
        title,
        type,
        withWhom,
        color,
        handleConfirm,
        handleBlue,
        handleGreen,
        handleRed,
        setTitle,
        setType,
        setWithWhom,
    };
};

const PopupForm = ({ closePopup }) => {
    const {
        title,
        type,
        withWhom,
        color,
        handleConfirm,
        handleBlue,
        handleGreen,
        handleRed,
        setTitle,
        setType,
        setWithWhom,
    } = usePopupForm(closePopup);
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
                <ColorDivision
                    color={color}
                    handleRed={handleRed}
                    handleGreen={handleGreen}
                    handleBlue={handleBlue}
                />
                <TouchableOpacity
                    style={styles.popupButtonContainer}
                    onPress={handleConfirm}
                >
                    <Text style={styles.popupButtonElement}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PopupForm;
