import { useMemo } from "react";
import { monthArray } from "../data/numberOfDaysArray";

export const useDateData = () => {
    const fillDayData = () => {
        let current = 1;
        let data = [];
        while (current <= 31) {
            data.push(current);
            current++;
        }
        return data;
    };
    const fillMonthData = () => {
        let data = [];
        for (const { month } of monthArray) {
            data.push(month);
        }
        return data;
    };
    const fillYearData = () => {
        const currentYear = new Date().getFullYear();
        let data = [];
        let current = currentYear - 16;
        while (current >= 1940) {
            data.push(current);
            current--;
        }
        return data;
    };
    const dayData = useMemo(() => fillDayData(), []);
    const monthData = useMemo(() => fillMonthData(), []);
    const yearData = useMemo(() => fillYearData(), []);

    return { dayData, monthData, yearData };
};
