import { Text, TouchableOpacity, View } from "react-native";
import { SHADES } from "../../../../../../constants";

const TripStepsDivision = ({ trip }) => {
    return (
        <View style={styles.basicDivision}>
            <Text style={styles.tripScdTitle}>The stages of my journey :</Text>
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
