import { useEffect, useReducer, useState } from "react";
import {
    TouchableOpacity,
    Text,
    Modal,
    View,
    TextInput,
    ScrollView,
} from "react-native";
import MapView from "react-native-maps";

import { useCountryArray } from "../../../../../../hooks/useCountryArray";
import { travelerTypeArray } from "../../../../../../data/travelerTypeArray";

import DatePickerRow from "../../../../../common/datePickerRow/DatePickerRow";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SelectList } from "react-native-dropdown-select-list";

import styles from "./tripModal.style";
import { useTripDuration } from "../../../../../../hooks/useTripDuration";
import { COLORS, SHADES, SHADOWS } from "../../../../../../constants";
import TipsDivision from "./tipsDivision/TipsDivision";

const whithWhomArray = [
    "In couple",
    "Solo trip",
    "With colleagues",
    "With my family",
    "With my friends",
];

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
        handleArrivalYearBLur,
        handleDepartureYearBlur,
    } = useTripDuration();
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

    useEffect(() => {
        console.log(tripDestination);
    }, [tripDestination]);

    return (
        <>
            <Modal
                visible={isVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => handleClose()}
            >
                <ScrollView
                    contentContainerStyle={styles.modalContentContainer}
                >
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
                        <View>
                            <SelectList
                                boxStyles={styles.modalInputBox}
                                inputStyles={{ color: COLORS.white }}
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
                            <Text
                                style={{
                                    position: "absolute",
                                    bottom: 12,
                                    color: SHADES.black06,
                                }}
                            >
                                {tripDestination.join(", ")}
                            </Text>
                        </View>
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
                            handleYearBlur={handleArrivalYearBLur}
                        />
                        <DatePickerRow
                            rowTitle="Departure"
                            dateObject={tripDuration.departure}
                            handleDay={setDepartureDay}
                            handleMonth={setDepartureMonth}
                            handleYear={setDepartureYear}
                            handleYearBlur={handleDepartureYearBlur}
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
                    <TipsDivision />
                    <TouchableOpacity
                        style={{
                            marginHorizontal: "10%",
                            backgroundColor: COLORS.secondary,
                            width: "80%",
                            paddingVertical: 8,
                            borderRadius: 60,
                            ...SHADOWS.medium,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                textTransform: "uppercase",
                                letterSpacing: -0.5,
                                textAlign: "center",
                            }}
                        >
                            Add trip
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
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
