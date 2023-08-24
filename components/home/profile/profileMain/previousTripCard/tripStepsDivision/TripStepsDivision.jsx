import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SHADES } from "../../../../../../constants";
import styles from "./tripStepsDivision.style";
import { useState } from "react";

const TripStepsDivision = ({ trip }) => {
    const [isStepsAccordionOpen, setIsStepsAccordionOpen] = useState(false);
    const toggleAccordion = () => setIsStepsAccordionOpen((state) => !state);
    return (
        <View style={styles.basicDivision}>
            <View style={styles.rowDisplay}>
                <Text style={styles.tripScdTitle}>
                    The stages of my journey
                </Text>
                <TouchableOpacity onPress={toggleAccordion}>
                    <FontAwesome
                        name="angle-down"
                        style={
                            isStepsAccordionOpen && {
                                transform: [{ rotate: "180deg" }],
                            }
                        }
                    />
                </TouchableOpacity>
            </View>
            <View
                style={
                    isStepsAccordionOpen
                        ? styles.stepsContainer
                        : { display: "none" }
                }
            >
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
                            <Text style={styles.stepTitle}>{step.event}</Text>
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
    );
};

export default TripStepsDivision;
