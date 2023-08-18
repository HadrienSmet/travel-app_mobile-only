import { Text, TextInput, View } from "react-native";
import styles from "./datePickerRow.style";
import { useEffect } from "react";

const DatePickerRow = ({
    rowTitle,
    dateObject,
    // dayValue,
    // monthValue,
    // yearValue,
    handleDay,
    handleMonth,
    handleYear,
    handleYearBlur,
}) => {
    // useEffect(() => {
    //     console.log("day from useEffect: ");
    //     console.log(dayValue);
    //     console.log("month from useEffect: ");
    //     console.log(monthValue);
    //     console.log("year from useEffect: ");
    //     console.log(yearValue);
    // }, [dayValue, monthValue, yearValue]);

    const checkYear = () => {
        const currentYear = new Date().getFullYear();
        const selectedYear = parseInt(dateObject.year);
        let trueYear;
        if (selectedYear < 1950) {
            trueYear = "1950";
        } else if (selectedYear > currentYear) {
            trueYear = currentYear.toString();
        } else {
            trueYear = dateObject.year;
        }

        handleYear(trueYear);
    };

    return (
        <View style={styles.rowStyle}>
            <Text style={styles.fadeElement}>{rowTitle} :</Text>
            <View style={styles.inputsContainer}>
                <TextInput
                    // value={dayValue}
                    value={dateObject.day}
                    placeholder="dd"
                    onChangeText={handleDay}
                    inputMode="numeric"
                    style={[
                        styles.inputStyle,
                        dateObject.day === undefined
                            ? styles.fadeElement
                            : styles.strongElement,
                    ]}
                />
                <TextInput
                    // value={monthValue}
                    value={dateObject.month}
                    placeholder="mm"
                    onChangeText={handleMonth}
                    inputMode="numeric"
                    style={[
                        styles.inputStyle,
                        dateObject.month === undefined
                            ? styles.fadeElement
                            : styles.strongElement,
                    ]}
                />
                <TextInput
                    // value={yearValue}
                    value={dateObject.year}
                    placeholder="yyyy"
                    onChangeText={handleYear}
                    onBlur={handleYearBlur}
                    inputMode="numeric"
                    style={[
                        styles.inputStyle,
                        dateObject.year === undefined
                            ? styles.fadeElement
                            : styles.strongElement,
                    ]}
                />
            </View>
        </View>
    );
};

export default DatePickerRow;
