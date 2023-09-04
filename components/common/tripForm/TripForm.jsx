import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { travelerTypeArray } from "../../../data/travelerTypeArray";
import styles from "./tripForm.style";
import { useState } from "react";
import MapDivision from "./mapDivision/MapDivision";

const whithWhomArray = [
    "In couple",
    "Solo trip",
    "With colleagues",
    "With my family",
    "With my friends",
];

const TripForm = ({ trip, handleConfirm }) => {
    const [tripTitle, setTripTitle] = useState(trip ? trip.title : "");
    const [tripType, setTripType] = useState(trip ? trip.type : undefined);
    const [tripWithWhom, setTripWithWhom] = useState(
        trip ? trip.withWhom : undefined
    );
    const [tripSteps, setTripSteps] = useState(trip ? trip.steps : []);
    const [tripTips, setTripTips] = useState(trip ? trip.tips : []);

    const pushTripSteps = (step) => setTripSteps((state) => [...state, step]);
    const pushTripTips = (tips) => setTripTips((state) => [...state, tips]);

    const handleSubmit = () =>
        handleConfirm(tripTitle, tripType, tripWithWhom, tripTips, tripSteps);

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
                    placeholder={
                        tripType === undefined
                            ? "Select the kind of your trip"
                            : tripType
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
                    setSelected={(val) => setTripWithWhom(val)}
                    label="With whom"
                    placeholder={
                        tripWithWhom === undefined
                            ? "Select option"
                            : tripWithWhom
                    }
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
                onPress={handleSubmit}
                style={styles.addTrippBtnContainer}
            >
                <Text style={styles.addTripBtnContent}>Confirm</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default TripForm;
