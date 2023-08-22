import { Text, TextInput, View, TouchableOpacity } from "react-native";
import DatePickerRow from "../../../../../../../common/datePickerRow/DatePickerRow";
import { useState } from "react";
import styles from "./tripEventForm.style";

const useEventDate = () => {
    const [dateObject, setDateObject] = useState({
        day: undefined,
        month: undefined,
        year: undefined,
    });
    const handleDay = (day) => {
        if (parseInt(day) < 1) {
            setDateObject({
                ...dateObject,
                day: "1",
            });
        } else if (parseInt(day) > 31) {
            setDateObject({
                ...dateObject,
                day: "31",
            });
        } else {
            setDateObject({
                ...dateObject,
                day,
            });
        }
    };
    const handleMonth = (month) => {
        if (parseInt(month) < 1) {
            setDateObject({
                ...dateObject,
                month: "1",
            });
        } else if (parseInt(month) > 12) {
            setDateObject({
                ...dateObject,
                month: "12",
            });
        } else {
            setDateObject({
                ...dateObject,
                month,
            });
        }
    };
    const handleYear = (year) =>
        setDateObject({
            ...dateObject,
            year,
        });
    const checkYear = () => {
        let year = dateObject.year;
        const currentYear = new Date().getFullYear();
        if (parseInt(year) < 1950) {
            setDateObject({
                ...dateObject,
                year: "1950",
            });
        } else if (parseInt(year) > currentYear) {
            setDateObject({
                ...dateObject,
                year: currentYear.toString(),
            });
        }
    };

    return {
        dateObject,
        checkYear,
        handleDay,
        handleMonth,
        handleYear,
    };
};

const TripEventForm = ({
    eventLocation,
    eventType,
    formBackground,
    pushTripStep,
}) => {
    const [content, setContent] = useState("");
    const { dateObject, checkYear, handleDay, handleMonth, handleYear } =
        useEventDate();

    const handleSubmit = () => {
        if (
            dateObject.day !== undefined &&
            dateObject.month !== undefined &&
            dateObject.year !== undefined
        ) {
            pushTripStep({
                event: eventType,
                location: eventLocation,
                date: dateObject,
                content,
            });
        } else {
            alert("You need to defines the date");
        }
    };

    return (
        <View
            style={[styles.tripEventForm, { backgroundColor: formBackground }]}
        >
            <Text style={styles.mainTitle}>
                Give us some details about your {eventType}
            </Text>
            <View style={styles.basicView}>
                {eventType === "arrival" && (
                    <Text style={styles.secondTitle}>When did you land?</Text>
                )}
                {eventType === "stopover" && (
                    <Text style={styles.secondTitle}>
                        When did you arrive there?
                    </Text>
                )}
                {eventType === "departure" && (
                    <Text style={styles.secondTitle}>
                        When did you take your flight?
                    </Text>
                )}
                <DatePickerRow
                    rowTitle={
                        eventType !== "departure" ? "arrival" : "departure"
                    }
                    dateObject={dateObject}
                    handleDay={handleDay}
                    handleMonth={handleMonth}
                    handleYear={handleYear}
                    handleYearBlur={checkYear}
                />
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
                <Text style={styles.confirmButtonContent}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TripEventForm;
