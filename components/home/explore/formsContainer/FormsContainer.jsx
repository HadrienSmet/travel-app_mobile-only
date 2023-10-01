import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { useKeyboardStatus } from "../../../../hooks/useKeyboardStatus";
import styles from "./formsContainer.style";
import { axiosPostTips } from "../../../../utils/axios/tips";
import {
    pushInEveryTips,
    pushInUserTips,
} from "../../../../features/tipsData.slice";

const adviseArray = [
    "Activity",
    "Advice",
    "Bar",
    "Beach",
    "Cheap",
    "Hotel",
    "Museum",
    "Music",
    "Nature",
    "Night life",
    "Remains",
    "Restaurant",
    "Sport",
    "Swim",
    "Transport",
    "Other...",
];
const warningArray = [
    "Activity",
    "Bad experience",
    "Bar",
    "Danger",
    "Hotel",
    "Museum",
    "Music",
    "Nature",
    "Night life",
    "Restaurant",
    "Scam",
    "Sport",
    "Transport",
    "Other...",
];

const useFormsContainer = (tipsLocation, tipsType, handleFormState) => {
    const [tipsAbout, setTipsAbout] = useState("");
    const [tipsContent, setTipsContent] = useState("");
    const userData = useSelector((state) => state.userDataReducer.userData);
    const dispatch = useDispatch();

    const handleConfirm = () => {
        const singleLetter = userData.lastname.split("")[0];
        const data = {
            author: `${userData.firstname} ${singleLetter}`,
            user_id: userData._id,
            location: tipsLocation,
            type: tipsType,
            about: tipsAbout,
            content: tipsContent,
            upVotes: [],
            downVotes: [],
        };
        if (tipsAbout !== "" && tipsContent !== "") {
            console.log(data);
            axiosPostTips(data)
                .then(() => {
                    dispatch(pushInEveryTips(data));
                    dispatch(pushInUserTips(data));
                    handleFormState("");
                })
                .catch((err) => console.log(err));
        } else {
            alert("All the fields are required");
        }
    };

    return {
        tipsAbout,
        tipsContent,
        setTipsAbout,
        setTipsContent,
        handleConfirm,
    };
};

const FormsContainer = ({ tipsType, tipsLocation, handleFormState }) => {
    const currentArray = tipsType === "warning" ? warningArray : adviseArray;
    const keyboardStatus = useKeyboardStatus();
    const {
        tipsAbout,
        tipsContent,
        setTipsAbout,
        setTipsContent,
        handleConfirm,
    } = useFormsContainer(tipsLocation, tipsType, handleFormState);

    return (
        <View
            style={
                keyboardStatus === "hidden"
                    ? styles.formContainer
                    : [
                          styles.formContainer,
                          { paddingBottom: 160, height: "90%" },
                      ]
            }
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.typeElement}>{tipsType}</Text>
                <SelectList
                    boxStyles={styles.selectBox}
                    inputStyles={
                        tipsAbout === ""
                            ? styles.placeholderColor
                            : styles.valueColor
                    }
                    // boxStyles={styles.listContainer}
                    // inputStyles={styles.listContent}
                    // dropdownStyles={{
                    //     backgroundColor: COLORS.white,
                    //     borderWidth: 0,
                    // }}
                    data={currentArray}
                    search={false}
                    save="value"
                    setSelected={(val) => setTipsAbout(val)}
                    label="tips type"
                    placeholder={`Select the type of your ${tipsType}`}
                />
                <TextInput
                    onChangeText={setTipsContent}
                    value={tipsContent}
                    placeholder={
                        tipsType === "warning"
                            ? "You should avoid..."
                            : "You should try..."
                    }
                    style={[styles.inputContainer, { verticalAlign: "top" }]}
                    multiline
                    numberOfLines={8}
                    // rows={8}
                    verticalAlign="start"
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleConfirm}
                >
                    <Text style={styles.buttonElement}>Confirm</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default FormsContainer;
