import { Text, TextInput, View } from "react-native";
import styles from "./datePickerRow.style";
import { useEffect } from "react";

const DatePickerRow = ({
    rowTitle,
    dateObject,
    handleDay,
    handleMonth,
    handleYear,
}) => {
    useEffect(() => {
        console.log("full date: ");
        console.log(dateObject);
        console.log("day date: ");
        console.log(dateObject.day);
        console.log("month date: ");
        console.log(dateObject.month);
        console.log("year date: ");
        console.log(dateObject.year);
    }, []);
    return (
        <View style={styles.rowStyle}>
            <Text style={styles.fadeElement}>{rowTitle} :</Text>
            <View style={styles.inputsContainer}>
                <TextInput
                    value={dateObject.day}
                    placeholder="dd"
                    onChange={(val) => {
                        console.log(val);
                        handleDay(val);
                    }}
                    inputMode="numeric"
                    style={[
                        styles.inputStyle,
                        dateObject.day === "0"
                            ? styles.fadeElement
                            : styles.strongElement,
                    ]}
                />
                <TextInput
                    value={
                        dateObject.month === "0"
                            ? "mm"
                            : dateObject.month.toString()
                    }
                    placeholder="mm"
                    inputHandler={handleMonth}
                    inputMode="numeric"
                    style={[
                        styles.inputStyle,
                        dateObject.month === "0"
                            ? styles.fadeElement
                            : styles.strongElement,
                    ]}
                />
                <TextInput
                    value={
                        dateObject.year === "0"
                            ? "yyyy"
                            : dateObject.year.toString()
                    }
                    placeholder="yyyy"
                    inputHandler={handleYear}
                    inputMode="numeric"
                    style={[
                        styles.inputStyle,
                        dateObject.year === "0"
                            ? styles.fadeElement
                            : styles.strongElement,
                    ]}
                />
            </View>
        </View>
    );
};

export default DatePickerRow;
