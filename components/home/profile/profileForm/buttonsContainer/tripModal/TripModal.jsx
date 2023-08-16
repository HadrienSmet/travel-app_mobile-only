import { TouchableOpacity, Text, Modal, View, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "../buttonsContainer.style";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import { useCountryArray } from "../../../../../../hooks/useCountryArray";

// const reducer = (case) => {
//     switch (case) {

//     }
// }

const TripModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [tripDestination, setTripDestination] = useState([]);
    const [tripDuration, setTripDuration] = useState({
        arrival: { day: 0, month: 0, year: 0 },
        departure: { day: 0, month: 0, year: 0 },
    });
    const [tripType, setTripType] = useState(undefined);
    const [tripTips, setTripTips] = useState(undefined);
    const { countriesArray } = useCountryArray();

    const handleDestination = (destination) =>
        setTripDestination((state) => [...state, destination]);

    return (
        <>
            <Modal visible={isVisible} transparent={true} animationType="slide">
                <View>
                    <FontAwesome name="plus" />
                    <Text>Add a new trip!</Text>
                    <View>
                        <Text>Where did you go?</Text>
                        <SelectList
                            // boxStyles={styles.listContainer}
                            // inputStyles={styles.listElement}
                            // dropdownStyles={styles.dropDownStyle}
                            data={countriesArray}
                            search={false}
                            save="value"
                            setSelected={(val) => handleDestination(val)}
                            label="Destinations"
                            arrowicon={<FontAwesome name="plus" />}
                        />
                    </View>
                    <View>
                        <Text>When did you made that trip?</Text>
                        <View>
                            <Text>Arrival :</Text>
                            <TextInput />
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.basicContainerStyle, styles.buttonContainer]}
            >
                <FontAwesome style={styles.buttonElement} name="map" />
                <Text style={styles.buttonElement}>Edit trips</Text>
            </TouchableOpacity>
        </>
    );
};

export default TripModal;
