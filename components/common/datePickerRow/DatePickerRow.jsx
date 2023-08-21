import { Text, TextInput, View } from "react-native";
import styles from "./datePickerRow.style";
import { useEffect, useState } from "react";
import { COLORS } from "../../../constants";

const coloredBgStyle = { color: COLORS.white };

const DatePickerRow = ({
    rowTitle,
    dateObject,
    handleDay,
    handleMonth,
    handleYear,
    handleYearBlur,
}) => {
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
            <Text style={{ color: COLORS.white }}>{rowTitle} :</Text>
            <View style={styles.inputsContainer}>
                <TextInput
                    value={dateObject.day}
                    placeholder="dd"
                    onChangeText={handleDay}
                    inputMode="numeric"
                    style={styles.inputStyle}
                />
                <TextInput
                    value={dateObject.month}
                    placeholder="mm"
                    onChangeText={handleMonth}
                    inputMode="numeric"
                    style={styles.inputStyle}
                />
                <TextInput
                    value={dateObject.year}
                    placeholder="yyyy"
                    onChangeText={handleYear}
                    onBlur={handleYearBlur}
                    inputMode="numeric"
                    style={styles.inputStyle}
                />
            </View>
        </View>
    );
};

export default DatePickerRow;
