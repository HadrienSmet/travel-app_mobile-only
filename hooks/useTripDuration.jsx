import { useReducer } from "react";

const ActionTypes = {
    SET_ARRIVAL_DAY: "arrival-day",
    SET_ARRIVAL_MONTH: "arrival-month",
    SET_ARRIVAL_YEAR: "arrival-year",
    SET_DEPARTURE_DAY: "departure-day",
    SET_DEPARTURE_MONTH: "departure-month",
    SET_DEPARTURE_YEAR: "departure-year",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_ARRIVAL_DAY:
            return {
                ...state,
                arrival: {
                    ...state.arrival,
                    day: action.payload,
                },
            };
        case ActionTypes.SET_ARRIVAL_MONTH:
            return {
                ...state,
                arrival: {
                    ...state.arrival,
                    month: action.payload,
                },
            };
        case ActionTypes.SET_ARRIVAL_YEAR:
            return {
                ...state,
                arrival: {
                    ...state.arrival,
                    year: action.payload,
                },
            };
        case ActionTypes.SET_DEPARTURE_DAY:
            return {
                ...state,
                departure: {
                    ...state.departure,
                    day: action.payload,
                },
            };
        case ActionTypes.SET_DEPARTURE_MONTH:
            return {
                ...state,
                departure: {
                    ...state.departure,
                    month: action.payload,
                },
            };
        case ActionTypes.SET_DEPARTURE_YEAR:
            return {
                ...state,
                departure: {
                    ...state.departure,
                    year: action.payload,
                },
            };
        default:
            return state;
    }
};

const checkDay = (day) => {
    let selectedDay;
    if (parseInt(day) > 31) {
        selectedDay = "31";
    } else if (parseInt(day) < 1) {
        selectedDay = "1";
    } else {
        selectedDay = day;
    }
    return { selectedDay };
};
const checkMonth = (month) => {
    let selectedMonth;
    if (parseInt(month) > 12) {
        selectedMonth = "12";
    } else if (parseInt(month) <= 0) {
        selectedMonth = "1";
    } else {
        selectedMonth = month;
    }

    return { selectedMonth };
};
const checkYear = (year) => {
    let selectedYear;
    const currentYear = new Date().getFullYear();
    if (parseInt(year) < 1950) {
        selectedYear = "1950";
    } else if (parseInt(year) > currentYear) {
        selectedYear = currentYear.toString();
    } else {
        selectedYear = year;
    }

    return { selectedYear };
};

export const useTripDuration = () => {
    const [tripDuration, dispatch] = useReducer(reducer, {
        arrival: { day: undefined, month: undefined, year: undefined },
        departure: { day: undefined, month: undefined, year: undefined },
    });
    const setArrivalDay = (day) => {
        const { selectedDay } = checkDay(day);
        dispatch({ type: ActionTypes.SET_ARRIVAL_DAY, payload: selectedDay });
    };

    const setArrivalMonth = (month) => {
        const { selectedMonth } = checkMonth(month);
        dispatch({
            type: ActionTypes.SET_ARRIVAL_MONTH,
            payload: selectedMonth,
        });
    };

    const setArrivalYear = (year) => {
        dispatch({ type: ActionTypes.SET_ARRIVAL_YEAR, payload: year });
    };

    const handleArrivalYearBLur = () => {
        const { selectedYear } = checkYear(tripDuration.arrival.year);
        dispatch({
            type: ActionTypes.SET_ARRIVAL_YEAR,
            payload: selectedYear,
        });
    };

    const setDepartureDay = (day) => {
        const { selectedDay } = checkDay(day);
        dispatch({ type: ActionTypes.SET_DEPARTURE_DAY, payload: selectedDay });
    };

    const setDepartureMonth = (month) => {
        const { selectedMonth } = checkMonth(month);
        dispatch({
            type: ActionTypes.SET_DEPARTURE_MONTH,
            payload: selectedMonth,
        });
    };

    const setDepartureYear = (year) => {
        dispatch({
            type: ActionTypes.SET_DEPARTURE_YEAR,
            payload: year,
        });
    };

    const handleDepartureYearBlur = () => {
        const { selectedYear } = checkYear(tripDuration.arrival.year);
        dispatch({
            type: ActionTypes.SET_ARRIVAL_YEAR,
            payload: selectedYear,
        });
        const arrivalDate = new Date(
            parseInt(tripDuration.arrival.year),
            parseInt(tripDuration.arrival.month),
            parseInt(tripDuration.arrival.day)
        );
        const departureDate = new Date(
            parseInt(tripDuration.departure.year),
            parseInt(tripDuration.departure.month),
            parseInt(tripDuration.departure.day)
        );
        if (arrivalDate > departureDate) {
            departureDate.setDate(departureDate.getDate() - 1);
            setArrivalDay(departureDate.getDay().toString());
            setArrivalMonth(departureDate.getMonth().toString());
            setArrivalYear(departureDate.getFullYear().toString());
        }
    };

    return {
        tripDuration,
        setArrivalDay,
        setArrivalMonth,
        setArrivalYear,
        setDepartureDay,
        setDepartureMonth,
        setDepartureYear,
        handleArrivalYearBLur,
        handleDepartureYearBlur,
    };
};
