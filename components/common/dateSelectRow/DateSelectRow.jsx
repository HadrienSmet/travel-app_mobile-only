import { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { dateToTimestamp } from "../../../utils/functions/dateToTimestamp";
import { useDateData } from "../../../hooks/useDateData";
import { monthArray } from "../../../data/numberOfDaysArray";

import { COLORS, SHADES } from "../../../constants";
import styles from "./dateSelectRow.style";

const windowWidth = Dimensions.get("window").width;
const rowInputsWidth = windowWidth * 0.75 - 68;

const DateSelectRow = ({
    dateContext,
    dateObject,
    handleDay,
    handleMonth,
    handleYear,
    setDateTimestamp,
}) => {
    const { dayData, monthData, yearData } = useDateData(dateContext);

    const handleBoxStyle = (denominator) => {
        const boxStyle = [
            styles.selectBox,
            dateContext === "signup"
                ? {
                      width: rowInputsWidth / denominator - 5.33,
                      borderRadius: 4,
                  }
                : {
                      width: rowInputsWidth / denominator - 5.33,
                      borderBottomWidth: 1,
                      borderRadius: 0,
                  },
        ];
        return boxStyle;
    };
    const handleElementStyle = (dateProperty) => {
        const elementStyle = [
            styles.selectContent,
            dateProperty === 0
                ? { color: SHADES.black04 }
                : { color: COLORS.black },
        ];
        return elementStyle;
    };

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
                        boxStyles={handleBoxStyle(4)}
                        dropdownStyles={styles.selectDropdown}
                        inputStyles={{ color: COLORS.white }}
                        placeholder="dd"
                        data={dayData}
                        search={false}
                        save="value"
                        label="day"
                        setSelected={(val) => handleDay(val)}
                        arrowicon={<></>}
                    />
                    <Text style={handleElementStyle(dateObject.day)}>
                        {dateObject.day === 0 ? "dd" : dateObject.day}
                    </Text>
                </View>
                <View style={styles.selectDivision}>
                    <SelectList
                        boxStyles={handleBoxStyle(4)}
                        dropdownStyles={styles.selectDropdown}
                        inputStyles={{ color: COLORS.white }}
                        placeholder="mm"
                        data={monthData}
                        search={false}
                        label="month"
                        save="value"
                        setSelected={(val) => handleMonth(val)}
                        arrowicon={<></>}
                    />
                    <Text style={handleElementStyle(dateObject.month)}>
                        {dateObject.month === 0 ? "mm" : dateObject.month}
                    </Text>
                </View>
                <View style={styles.selectDivision}>
                    <SelectList
                        boxStyles={handleBoxStyle(2)}
                        dropdownStyles={styles.selectDropdown}
                        inputStyles={{ color: COLORS.white }}
                        placeholder="yyyy"
                        data={yearData}
                        search={false}
                        save="value"
                        label="year"
                        setSelected={(val) => handleYear(val)}
                        arrowicon={<></>}
                    />
                    <Text style={handleElementStyle(dateObject.year)}>
                        {dateObject.year === 0 ? "yyyy" : dateObject.year}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default DateSelectRow;
