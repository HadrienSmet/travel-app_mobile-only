import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "./stepForm.style";
import DateSelectRow from "../../../../../common/dateSelectRow/DateSelectRow";

const useStepForm = () => {
    const [content, setContent] = useState("");
    const [dateTimestamp, setDateTimestamp] = useState(0);
    const [dateObject, setDateObject] = useState({
        day: 0,
        month: 0,
        year: 0,
    });
    const handleDay = (day) =>
        setDateObject((state) => ({ ...state, day: day }));
    const handleMonth = (month) =>
        setDateObject((state) => ({ ...state, month: month }));
    const handleYear = (year) =>
        setDateObject((state) => ({ ...state, year: year }));

    return {
        content,
        dateObject,
        dateTimestamp,
        handleDay,
        handleMonth,
        handleYear,
        setContent,
        setDateTimestamp,
    };
};

const StepForm = ({
    formState,
    arrivalLocation,
    departureLocation,
    stopoverLocation,
    handleTripSteps,
}) => {
    const {
        content,
        dateObject,
        dateTimestamp,
        handleDay,
        handleMonth,
        handleYear,
        setContent,
        setDateTimestamp,
    } = useStepForm();
    const handleEventLocation = () => {
        const eventLocation =
            formState === "arrival"
                ? arrivalLocation
                : formState === "departure"
                ? departureLocation
                : stopoverLocation[stopoverLocation.length - 1];
        return eventLocation;
    };
    const eventLocation = handleEventLocation();
    const titleString =
        formState === "arrival"
            ? " land"
            : formState === "departure"
            ? " take your flight back"
            : " arrive there";
    const handleSubmit = () => {
        if (dateTimestamp !== 0) {
            handleTripSteps({
                type: formState,
                location: eventLocation,
                date: dateTimestamp,
                content,
            });
        } else {
            alert("You need to defines the date");
        }
    };

    return (
        <View style={styles.stepForm}>
            <View style={{ height: "100%", borderBottomWidth: 1 }}>
                <ScrollView>
                    <View style={[styles.tripEventForm]}>
                        <Text style={styles.mainTitle}>
                            Give us some details about your {formState}
                        </Text>
                        <View style={styles.basicView}>
                            <Text style={styles.secondTitle}>
                                When did you {titleString}?
                            </Text>
                            <View
                                style={{
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <View style={{ width: "60%" }}>
                                    <DateSelectRow
                                        dateContext="trip"
                                        dateObject={dateObject}
                                        handleDay={handleDay}
                                        handleMonth={handleMonth}
                                        handleYear={handleYear}
                                        setDateTimestamp={setDateTimestamp}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.basicView}>
                            <Text style={styles.secondTitle}>
                                Something you want to add?
                            </Text>
                            <TextInput
                                value={content}
                                onChangeText={setContent}
                                placeholder="Writte some comments if you want"
                                multiline
                                numberOfLines={5}
                                style={[
                                    styles.textareaStyle,
                                    { verticalAlign: "top" },
                                ]}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.confirmButtonContainer}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.confirmButtonContent}>
                                Add {formState}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default StepForm;
