import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MarkersDisplayer from "../markersDisplayer/MarkersDisplayer";
import { timestampToDate } from "../../../../../../utils/functions";
import { SHADES } from "../../../../../../constants";
import styles from "./tripStepsDivision.style";

const TripStepsDivision = ({
    isStepsAccordionOpen,
    toggleStepsAccordion,
    trip,
}) => {
    return (
        <View style={styles.basicDivision}>
            <View style={styles.rowDisplay}>
                <Text style={styles.tripScdTitle}>
                    The stages of my journey
                </Text>
                <TouchableOpacity onPress={toggleStepsAccordion}>
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
                            <Text style={styles.stepTitle}>{step.type}</Text>
                            <Text style={styles.fadeElement}>
                                {timestampToDate(step.date)}
                            </Text>
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
            <MarkersDisplayer color={trip.color} markersList={trip.steps} />
        </View>
    );
};

export default TripStepsDivision;
