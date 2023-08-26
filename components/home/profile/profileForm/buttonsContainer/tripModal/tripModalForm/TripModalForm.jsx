import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { travelerTypeArray } from "../../../../../../../data/travelerTypeArray";
import styles from "./tripModalForm.style";
import { useEffect, useState } from "react";
import MapDivision from "../mapDivision/MapDivision";
import { axiosPushTrip } from "../../../../../../../utils/axios/user/axiosPushTrip";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../../../../../features/userData.slice";

const whithWhomArray = [
    "In couple",
    "Solo trip",
    "With colleagues",
    "With my family",
    "With my friends",
];

const TripModalForm = ({ handleClose }) => {
    const [tripTitle, setTripTitle] = useState("");
    const [tripType, setTripType] = useState(undefined);
    const [tripWithWhom, setTripWithWhom] = useState(undefined);
    const [tripSteps, setTripSteps] = useState([]);
    const [tripTips, setTripTips] = useState([]);
    const userData = useSelector((state) => state.newUserData.userData);
    const dispatch = useDispatch();

    const pushTripSteps = (step) => setTripSteps((state) => [...state, step]);
    const pushTripTips = (tips) => setTripTips((state) => [...state, tips]);
    const handleConfirm = () => {
        const data = {
            title: tripTitle,
            type: tripType,
            withWhom: tripWithWhom,
            tips: tripTips,
            steps: tripSteps,
        };
        console.log("next is data");
        console.log(data);
        if (
            tripTitle !== "" &&
            tripWithWhom !== undefined &&
            tripType !== undefined
        ) {
            axiosPushTrip(userData.userId, data, userData.token)
                .then((res) => {
                    const dispatchData = {
                        previousTrips: [...userData.previousTrips, data],
                    };
                    console.log(res.data);
                    dispatch(setUserData(dispatchData));
                    handleClose();
                })
                .catch((err) => console.log(err));
        } else {
            alert(
                "Need to define a title, a type and to share with whom you traveled with"
            );
        }
    };
    useEffect(() => {
        console.log(tripWithWhom);
    }, [tripWithWhom]);
    useEffect(() => {
        console.log(tripSteps);
    }, [tripSteps]);
    useEffect(() => {
        console.log(tripTips);
    }, [tripTips]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modalBasicDivision}>
                <Text style={styles.modalSecondTitle}>
                    Give a title to your trip!
                </Text>
                <TextInput
                    value={tripTitle}
                    onChangeText={setTripTitle}
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
                    setSelected={(val) => setTripType(val)}
                    label="Trip type"
                    placeholder="Select the kind of your trip"
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
                    setSelected={(val) => setTripWithWhom(val)}
                    label="With whom"
                    placeholder="Select option"
                />
            </View>
            <MapDivision
                tripSteps={tripSteps}
                tripTips={tripTips}
                tripTitle={tripTitle}
                pushTripSteps={pushTripSteps}
                pushTripTips={pushTripTips}
            />
            <TouchableOpacity
                onPress={handleConfirm}
                style={styles.addTrippBtnContainer}
            >
                <Text style={styles.addTripBtnContent}>Add trip</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default TripModalForm;
