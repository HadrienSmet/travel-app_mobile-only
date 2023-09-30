import { Text, TextInput, View, TouchableOpacity } from "react-native";
import DatePickerRow from "../../../datePickerRow/DatePickerRow";
import { useState } from "react";
import styles from "./tripEventForm.style";
import DateSelectRow from "../../../dateSelectRow/DateSelectRow";

const useEventDate = () => {
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
        dateObject,
        dateTimestamp,
        handleDay,
        handleMonth,
        handleYear,
        setDateTimestamp,
    };
};

const TripEventForm = ({ eventLocation, eventType, pushTripStep }) => {
    const [content, setContent] = useState("");
    const {
        dateObject,
        dateTimestamp,
        handleDay,
        handleMonth,
        handleYear,
        setDateTimestamp,
    } = useEventDate();
    const titleString =
        eventType === "arrival"
            ? " land"
            : eventType === "departure"
            ? " take your flight back"
            : " arrive there";
    const handleSubmit = () => {
        if (
            dateObject.day !== undefined &&
            dateObject.month !== undefined &&
            dateObject.year !== undefined
        ) {
            pushTripStep({
                type: eventType,
                location: eventLocation,
                date: dateObject,
                content,
            });
        } else {
            alert("You need to defines the date");
        }
    };

    return (
        <View style={[styles.tripEventForm]}>
            <Text style={styles.mainTitle}>
                Give us some details about your {eventType}
            </Text>
            <View style={styles.basicView}>
                <Text style={styles.secondTitle}>
                    When did you {titleString}?
                </Text>
                <View style={{ justifyContent: "center", width: "100%" }}>
                    <View style={{ width: "60%" }}>
                        <DateSelectRow
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
                    style={[styles.textareaStyle, { verticalAlign: "top" }]}
                />
            </View>
            <TouchableOpacity
                style={styles.confirmButtonContainer}
                onPress={handleSubmit}
            >
                <Text style={styles.confirmButtonContent}>Add {eventType}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TripEventForm;
