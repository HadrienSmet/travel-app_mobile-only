import { useReducer, useState } from "react";
import { TouchableOpacity, Text, Modal, View } from "react-native";

import { useCountryArray } from "../../../../../../hooks/useCountryArray";
import { travelerTypeArray } from "../../../../../../data/travelerTypeArray";

import DatePickerRow from "../../../../../common/datePickerRow/DatePickerRow";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";

import styles from "./tripModal.style";

const whithWhomArray = [
    "In couple",
    "Solo trip",
    "With colleagues",
    "With my family",
    "With my friends",
];

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

const useTripDuration = () => {
    const [tripDuration, dispatch] = useReducer(reducer, {
        arrival: { day: "0", month: "0", year: "0" },
        departure: { day: "0", month: "0", year: "0" },
    });
    const setArrivalDay = (day) =>
        dispatch({ type: ActionTypes.SET_ARRIVAL_DAY, payload: day });

    const setArrivalMonth = (month) =>
        dispatch({ type: ActionTypes.SET_ARRIVAL_MONTH, payload: month });

    const setArrivalYear = (year) =>
        dispatch({ type: ActionTypes.SET_ARRIVAL_YEAR, payload: year });

    const setDepartureDay = (day) =>
        dispatch({ type: ActionTypes.SET_DEPARTURE_DAY, payload: day });

    const setDepartureMonth = (month) =>
        dispatch({ type: ActionTypes.SET_DEPARTURE_MONTH, payload: month });

    const setDepartureYear = (year) =>
        dispatch({ type: ActionTypes.SET_DEPARTURE_YEAR, payload: year });

    return {
        tripDuration,
        setArrivalDay,
        setArrivalMonth,
        setArrivalYear,
        setDepartureDay,
        setDepartureMonth,
        setDepartureYear,
    };
};

const useTripDestination = () => {
    const [tripDestination, setTripDestination] = useState([]);
    const handleDestination = (destination) =>
        setTripDestination((state) => [...state, destination]);

    return { tripDestination, handleDestination };
};

const TripModal = () => {
    const {
        tripDuration,
        setArrivalDay,
        setArrivalMonth,
        setArrivalYear,
        setDepartureDay,
        setDepartureMonth,
        setDepartureYear,
    } = useTripDuration();

    // const [arrivalDay, setArrivalDay] = useState("0");
    // const [arrivalMonth, setArrivalMonth] = useState("0");
    // const [arrivalYear, setArrivalYear] = useState("0");
    // const [departureDay, setDepartureDay] = useState("0");
    // const [departureMonth, setDepartureMonth] = useState("0");
    // const [departureYear, setDepartureYear] = useState("0");
    const { tripDestination, handleDestination } = useTripDestination("0");
    const [isVisible, setIsVisible] = useState(false);
    const [tripType, setTripType] = useState(undefined);
    const [tripWithWhom, setTripWithWhom] = useState(undefined);
    const [tripTips, setTripTips] = useState(undefined);
    const { countriesArray } = useCountryArray();

    const handleOpen = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);
    const handleConfirm = () => {
        const data = {
            destination: tripDestination,
            duration: tripDuration,
            type: tripType,
            withWhom: tripWithWhom,
            tips: tripTips,
        };
        console.log(data);
    };

    return (
        <>
            <Modal
                visible={isVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => handleClose()}
            >
                <View style={styles.modalContentContainer}>
                    <View style={{ width: "100%", alignItems: "flex-end" }}>
                        <TouchableOpacity onPress={handleClose}>
                            <FontAwesome
                                style={styles.closingIcon}
                                name="times"
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.modalMainTitle}>Add a new trip!</Text>
                    <View style={styles.modalBasicDivision}>
                        <Text style={styles.modalSecondTitle}>
                            Where did you go?
                        </Text>
                        <SelectList
                            boxStyles={styles.modalInputBox}
                            inputStyles={styles.modalInputElement}
                            data={countriesArray}
                            search={false}
                            save="value"
                            setSelected={(val) => handleDestination(val)}
                            label="Destinations"
                            arrowicon={
                                <FontAwesome
                                    style={styles.modalInputElement}
                                    name="plus"
                                />
                            }
                            placeholder="Select you destination(s)"
                        />
                    </View>
                    <View style={styles.modalBasicDivision}>
                        <Text style={styles.modalSecondTitle}>
                            When did you made that trip?
                        </Text>
                        <DatePickerRow
                            rowTitle="Arrival"
                            dateObject={tripDuration.arrival}
                            handleDay={setArrivalDay}
                            handleMonth={setArrivalMonth}
                            handleYear={setArrivalYear}
                        />
                        <DatePickerRow
                            rowTitle="Departure"
                            dateObject={tripDuration.departure}
                            handleDay={setDepartureDay}
                            handleMonth={setDepartureMonth}
                            handleYear={setDepartureYear}
                        />
                    </View>
                    <View style={styles.modalBasicDivision}>
                        <Text style={styles.modalSecondTitle}>
                            What kind of trip?
                        </Text>
                        <SelectList
                            boxStyles={styles.modalInputBox}
                            inputStyles={styles.modalInputElement}
                            data={travelerTypeArray}
                            search={false}
                            save="value"
                            setSelected={(val) => setTripType(val)}
                            label="Trip type"
                            placeholder="Select the kind of your trip"
                        />
                    </View>
                    <View style={styles.modalBasicDivision}>
                        <Text style={styles.modalSecondTitle}>
                            With whom did you made that trip?
                        </Text>
                        <SelectList
                            boxStyles={styles.modalInputBox}
                            inputStyles={styles.modalInputElement}
                            data={whithWhomArray}
                            search={false}
                            save="value"
                            setSelected={(val) => setTripWithWhom(val)}
                            label="With whom"
                            placeholder="Select option"
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={handleOpen}
                style={[styles.basicContainerStyle, styles.buttonContainer]}
            >
                <FontAwesome style={styles.buttonElement} name="map" />
                <Text style={styles.buttonElement}>Edit trips</Text>
            </TouchableOpacity>
        </>
    );
};

export default TripModal;
