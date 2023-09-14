import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { daysArray, monthArray } from "../../../data/numberOfDaysArray";
import styles from "./dateSelectRow.style";
import { COLORS, SHADES } from "../../../constants";
import { useDateData } from "../../../hooks/useDateData";
import { dateToTimestamp } from "../../../utils/functions/dateToTimestamp";
import { ageCalculator } from "../../../utils/functions/ageCalculator";

const windowWidth = Dimensions.get("window").width;
const rowInputsWidth = windowWidth * 0.75 - 68;

const DateSelectRow = ({
    dateObject,
    handleDay,
    handleMonth,
    handleYear,
    setDateTimestamp,
}) => {
    const { dayData, monthData, yearData } = useDateData();

    useEffect(() => {
        const checkDay = () => {
            const maxDays = monthArray[dateObject.month - 1].days;
            if (dateObject.day > maxDays) handleDay(maxDays);
        };
        if (dateObject.month !== 0 && dateObject.day !== 0) checkDay();
        if (
            dateObject.month !== 0 &&
            dateObject.day !== 0 &&
            dateObject.year !== 0
        ) {
            const userTimestamp = dateToTimestamp(
                dateObject.day,
                dateObject.month,
                dateObject.year
            );
            setDateTimestamp(userTimestamp);
        }
    }, [dateObject]);
    return (
        <View style={styles.divRow}>
            <Text style={styles.rowTitle}>Birthday:</Text>
            <View style={styles.inputsRow}>
                <View style={styles.selectDivision}>
                    <SelectList
                        boxStyles={[
                            styles.selectBox,
                            { width: rowInputsWidth / 4 - 5.33 },
                        ]}
                        dropdownStyles={styles.selectDropdown}
                        inputStyles={{ color: COLORS.white }}
                        placeholder="dd"
                        data={dayData}
                        search={false}
                        save="value"
                        label="day"
                        // onSelect={(val) => handleDay(val)}
                        setSelected={(val) => handleDay(val)}
                        arrowicon={<></>}
                    />
                    <Text
                        style={[
                            styles.selectContent,
                            dateObject.day === 0
                                ? { color: SHADES.black04 }
                                : { color: COLORS.black },
                        ]}
                    >
                        {dateObject.day === 0 ? "dd" : dateObject.day}
                    </Text>
                </View>
                <View style={styles.selectDivision}>
                    <SelectList
                        boxStyles={[
                            styles.selectBox,
                            { width: rowInputsWidth / 4 - 5.33 },
                        ]}
                        dropdownStyles={styles.selectDropdown}
                        inputStyles={{ color: COLORS.white }}
                        placeholder="mm"
                        data={monthData}
                        search={false}
                        label="month"
                        save="value"
                        // onSelect={(val) => handleMonth(val)}
                        setSelected={(val) => handleMonth(val)}
                        arrowicon={<></>}
                    />
                    <Text
                        style={[
                            styles.selectContent,
                            dateObject.month === 0
                                ? { color: SHADES.black04 }
                                : { color: COLORS.black },
                        ]}
                    >
                        {dateObject.month === 0 ? "mm" : dateObject.month}
                    </Text>
                </View>
                <View style={styles.selectDivision}>
                    <SelectList
                        boxStyles={[
                            styles.selectBox,
                            { width: rowInputsWidth / 2 - 5.33 },
                        ]}
                        dropdownStyles={styles.selectDropdown}
                        inputStyles={{ color: COLORS.white }}
                        placeholder="yyyy"
                        data={yearData}
                        search={false}
                        save="value"
                        label="year"
                        // onSelect={(val) => handleYear(val)}
                        setSelected={(val) => handleYear(val)}
                        arrowicon={<></>}
                    />
                    <Text
                        style={[
                            styles.selectContent,
                            dateObject.year === 0
                                ? { color: SHADES.black04 }
                                : { color: COLORS.black },
                        ]}
                    >
                        {dateObject.year === 0 ? "yyyy" : dateObject.year}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default DateSelectRow;
