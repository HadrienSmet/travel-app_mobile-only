import { Text, View } from "react-native";
import styles from "./tripDetailsDisplayer.style";

const TripDetailsDisplayer = ({ tripTips, tripSteps, tripTitle }) => {
    return (
        <View style={styles.componentContainer}>
            {tripSteps.length !== 0 && (
                <View style={styles.basicDivision}>
                    <Text style={styles.divisionTitle}>
                        All the steps of {tripTitle}
                    </Text>
                    {tripSteps.map((step, index) => (
                        <View
                            key={`step-${index}`}
                            style={
                                index < tripSteps.length - 1
                                    ? [
                                          styles.mapElementDivision,
                                          {
                                              borderBottomWidth: 1,
                                              paddingBottom: 12,
                                          },
                                      ]
                                    : styles.mapElementDivision
                            }
                        >
                            <View style={styles.mapElementHeader}>
                                <Text style={styles.elementTitle}>
                                    {step.event}
                                </Text>
                                <Text
                                    style={styles.elementContent}
                                >{`${step.date.day}/${step.date.month}/${step.date.year}`}</Text>
                            </View>
                            {step.content !== "" && (
                                <Text style={styles.elementContent}>
                                    {step.content}
                                </Text>
                            )}
                        </View>
                    ))}
                </View>
            )}
            {tripTips.length !== 0 && (
                <View style={styles.basicDivision}>
                    <Text style={styles.divisionTitle}>
                        All the tips you have to share about {tripTitle}
                    </Text>
                    {tripTips.map((tips, index) => (
                        <View
                            style={
                                index < tripTips.length - 1
                                    ? [
                                          styles.mapElementDivision,
                                          {
                                              borderBottomWidth: 1,
                                              paddingBottom: 12,
                                          },
                                      ]
                                    : styles.mapElementDivision
                            }
                            key={`tips-${index}`}
                        >
                            <View style={styles.mapElementHeader}>
                                <Text style={styles.elementTitle}>
                                    {tips.type}
                                </Text>
                                <Text style={styles.elementContent}>
                                    {tips.about}
                                </Text>
                            </View>
                            <Text style={styles.elementContent}>
                                {tips.content}
                            </Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default TripDetailsDisplayer;
