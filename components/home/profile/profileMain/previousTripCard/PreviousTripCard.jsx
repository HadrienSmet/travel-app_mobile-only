import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./previousTripCard.style";
import { SHADES } from "../../../../../constants";

const PreviousTripCard = ({ trip, index }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const toggleAccordion = () => setIsAccordionOpen((state) => !state);
    useEffect(() => {
        console.log("next log is trip from map");
        console.log(trip);
    }, []);
    return (
        <View style={styles.tripContainer} key={`trip-${index}`}>
            <View style={styles.rowDisplay}>
                <Text style={styles.triptitle}>{trip.title}</Text>
                <TouchableOpacity onPress={toggleAccordion}>
                    <FontAwesome style={styles.angleIcon} name="angle-down" />
                </TouchableOpacity>
            </View>
            <View style={styles.basicDivision}>
                <Text style={styles.fadeElement}>{trip.type}</Text>
                <View style={styles.basicDivision}>
                    <Text style={styles.tripScdTitle}>
                        The stages of my journey :
                    </Text>
                    <View style={styles.stepsContainer}>
                        {trip.steps.map((step, i) => (
                            <View
                                style={
                                    i < trip.steps.length - 1 && {
                                        borderBottomWidth: 1,
                                        borderColor: SHADES.black02,
                                        paddingBottom: 8,
                                    }
                                }
                                key={`step-${i}`}
                            >
                                <View style={styles.rowDisplay}>
                                    <Text style={styles.stepTitle}>
                                        {step.event}
                                    </Text>
                                    <Text
                                        style={styles.fadeElement}
                                    >{`${step.date[0].day}/${step.date[0].month}/${step.date[0].year}`}</Text>
                                </View>
                                <Text
                                    style={[
                                        styles.fadeElement,
                                        { paddingHorizontal: 6 },
                                    ]}
                                >
                                    {step.content}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.stepsButtonContainer}>
                        <Text style={styles.stepsButtonElement}>
                            My journey on a map
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PreviousTripCard;
