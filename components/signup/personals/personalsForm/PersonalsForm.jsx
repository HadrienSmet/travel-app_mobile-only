import { useState } from "react";
import { useRouter } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import { useDispatch } from "react-redux";
import { setUserData } from "../../../../features/userData.slice";

import { useCountryArray } from "../../../../hooks";
import ConnexionInputContainer from "../../../connexion/connexionInputContainer/ConnexionInputContainer";

import { COLORS, SHADES, nationalitiesArray } from "../../../../constants";
import styles from "./personalsForm.style";
import DateSelectRow from "../../../common/dateSelectRow/DateSelectRow";

const usePersonalsFirstname = () => {
    const [firstname, setFirstname] = useState("");
    const [isFirstnameOk, setIsFirstnameOk] = useState(false);
    const [firstnameCheckOpacity, setFirstnameCheckOpacity] = useState({
        opacity: 0,
    });
    const [firstnameTimesOpacity, setFirstnameTimesOpacity] = useState({
        opacity: 0,
    });
    const [firstnameMessage, setFirstnameMessage] = useState("");

    const handleFineFirstname = () => {
        setIsFirstnameOk(true);
        setFirstnameMessage("");
        setFirstnameCheckOpacity({ opacity: 1 });
        setFirstnameTimesOpacity({ opacity: 0 });
    };

    const handleWrongFirstname = (message) => {
        setIsFirstnameOk(false);
        setFirstnameMessage(message);
        setFirstnameCheckOpacity({ opacity: 0 });
        setFirstnameTimesOpacity({ opacity: 1 });
    };

    const handleFirstname = () => {
        if (
            !firstname.match(
                /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
            )
        ) {
            handleWrongFirstname(
                "First name fields only accepts letters and needs to start with a capital letter"
            );
        } else if (firstname.length < 3 || firstname.length > 30) {
            handleWrongFirstname(
                "First name can only contain between 3 and 30 characters"
            );
        } else {
            handleFineFirstname();
        }
    };

    return {
        firstnameCheckOpacity,
        firstnameTimesOpacity,
        firstname,
        firstnameMessage,
        isFirstnameOk,
        setFirstname,
        handleFirstname,
    };
};

const usePersonalsLastname = () => {
    const [lastname, setLastname] = useState("");
    const [isLastnameOk, setIsLastnameOk] = useState(false);
    const [lastnameCheckOpacity, setLastnameCheckOpacity] = useState({
        opacity: 0,
    });
    const [lastnameTimesOpacity, setLastnameTimesOpacity] = useState({
        opacity: 0,
    });
    const [lastnameMessage, setLastnameMessage] = useState("");

    const handleFineLastname = () => {
        setIsLastnameOk(true);
        setLastnameMessage("");
        setLastnameCheckOpacity({ opacity: 1 });
        setLastnameTimesOpacity({ opacity: 0 });
    };

    const handleWrongLastname = (message) => {
        setIsLastnameOk(false);
        setLastnameMessage(message);
        setLastnameCheckOpacity({ opacity: 0 });
        setLastnameTimesOpacity({ opacity: 1 });
    };

    const handleLastname = () => {
        if (
            !lastname.match(
                /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
            )
        ) {
            handleWrongLastname(
                "Last name fields only accepts letters and needs to start with a capital letter"
            );
        } else if (lastname.length < 3 || lastname.length > 30) {
            handleWrongLastname(
                "Last name can only contain between 3 and 30 characters"
            );
        } else {
            handleFineLastname();
        }
    };

    return {
        lastnameCheckOpacity,
        lastnameTimesOpacity,
        lastname,
        lastnameMessage,
        isLastnameOk,
        setLastname,
        handleLastname,
    };
};

const usePersonalsGender = () => {
    const [gender, setGender] = useState("");
    const genderArray = ["Men", "Women", "Other"];
    return { genderArray, gender, setGender };
};

const usePersonalsAge = () => {
    const [birthTimestamp, setBirthTimestamp] = useState(0);
    const [birthday, setBirthday] = useState({
        day: 0,
        month: 0,
        year: 0,
    });
    const handleDay = (day) => setBirthday((state) => ({ ...state, day: day }));
    const handleMonth = (month) =>
        setBirthday((state) => ({ ...state, month: month }));
    const handleYear = (year) =>
        setBirthday((state) => ({ ...state, year: year }));

    return {
        birthday,
        birthTimestamp,
        setBirthTimestamp,
        handleDay,
        handleMonth,
        handleYear,
    };
};

const usePersonalsCountry = () => {
    const { countriesArray } = useCountryArray();
    const [country, setCountry] = useState("");

    return {
        country,
        countriesArray,
        setCountry,
    };
};

const PersonalsForm = () => {
    const [nationality, setNationality] = useState("");
    const {
        firstnameCheckOpacity,
        firstnameTimesOpacity,
        firstname,
        firstnameMessage,
        isFirstnameOk,
        setFirstname,
        handleFirstname,
    } = usePersonalsFirstname();
    const {
        lastnameCheckOpacity,
        lastnameTimesOpacity,
        lastname,
        lastnameMessage,
        isLastnameOk,
        setLastname,
        handleLastname,
    } = usePersonalsLastname();
    const { genderArray, gender, setGender } = usePersonalsGender();
    const {
        birthday,
        birthTimestamp,
        setBirthTimestamp,
        handleDay,
        handleMonth,
        handleYear,
    } = usePersonalsAge();
    const { country, countriesArray, setCountry } = usePersonalsCountry();
    const dispatch = useDispatch();
    const router = useRouter();

    const handlePersonals = () => {
        if (
            isFirstnameOk &&
            isLastnameOk &&
            gender !== "" &&
            birthTimestamp !== 0 &&
            country !== "" &&
            nationality !== ""
        ) {
            const data = {
                firstname: firstname.trimEnd(),
                lastname: lastname.trimEnd(),
                gender,
                birth: birthTimestamp,
                country,
                nationality,
            };
            dispatch(setUserData(data));
            router.push("profilePicture");
        } else {
            alert("Those fields are required");
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.personalsInputsContainer}>
                <ConnexionInputContainer
                    inputValue={firstname}
                    inputHandler={setFirstname}
                    inputPlaceholder="First name"
                    blurHandler={handleFirstname}
                    message={firstnameMessage}
                    checkOpacity={firstnameCheckOpacity}
                    timesOpacity={firstnameTimesOpacity}
                />
                <ConnexionInputContainer
                    inputValue={lastname}
                    inputHandler={setLastname}
                    inputPlaceholder="Last name"
                    blurHandler={handleLastname}
                    message={lastnameMessage}
                    checkOpacity={lastnameCheckOpacity}
                    timesOpacity={lastnameTimesOpacity}
                />
                <SelectList
                    boxStyles={styles.flatListStyle}
                    dropdownStyles={styles.dropDownStyle}
                    inputStyles={
                        gender === ""
                            ? { color: SHADES.black04 }
                            : { color: COLORS.black }
                    }
                    data={genderArray}
                    search={false}
                    save="value"
                    setSelected={(val) => setGender(val)}
                    label="Gender"
                    placeholder="Gender"
                />
                <DateSelectRow
                    dateContext="signup"
                    dateObject={birthday}
                    handleDay={handleDay}
                    handleMonth={handleMonth}
                    handleYear={handleYear}
                    setDateTimestamp={setBirthTimestamp}
                />
                <SelectList
                    search={false}
                    boxStyles={styles.flatListStyle}
                    dropdownStyles={[
                        styles.dropDownStyle,
                        {
                            position: "relative",
                            top: -10,
                            zIndex: 20,
                        },
                    ]}
                    inputStyles={
                        country === ""
                            ? { color: SHADES.black04 }
                            : { color: COLORS.black }
                    }
                    data={countriesArray}
                    save="value"
                    setSelected={(val) => setCountry(val)}
                    label="Country"
                    placeholder="Country of Residence"
                />
                <SelectList
                    search={false}
                    boxStyles={styles.flatListStyle}
                    dropdownStyles={[
                        styles.dropDownStyle,
                        {
                            position: "relative",
                            top: -10,
                            zIndex: 20,
                        },
                    ]}
                    inputStyles={
                        nationality === ""
                            ? { color: SHADES.black04 }
                            : { color: COLORS.black }
                    }
                    data={nationalitiesArray}
                    save="value"
                    setSelected={(val) => setNationality(val)}
                    label="Nationality"
                    placeholder="Nationality"
                />
            </View>
            <TouchableOpacity
                onPress={handlePersonals}
                style={styles.personalsButtonContainer}
            >
                <Text style={styles.personalsButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PersonalsForm;
