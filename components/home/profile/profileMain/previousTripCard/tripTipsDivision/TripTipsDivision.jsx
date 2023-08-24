import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SHADES } from "../../../../../../constants";
import { useState } from "react";
import styles from "./tripTipsDivision.style";

const TripTipsDivision = ({ trip }) => {
    const [isTipsAccordionOpen, setIsTipssAccordionOpen] = useState(false);
    const toggleAccordion = () => setIsTipssAccordionOpen((state) => !state);
    return (
        <View style={styles.basicDivision}>
            <View style={styles.rowDisplay}>
                <Text style={styles.tripScdTitle}>
                    The tips I learned during my journey
                </Text>
                <TouchableOpacity onPress={toggleAccordion}>
                    <FontAwesome
                        name="angle-down"
                        style={
                            isTipsAccordionOpen && {
                                transform: [{ rotate: "180deg" }],
                            }
                        }
                    />
                </TouchableOpacity>
            </View>
            <View
                style={
                    isTipsAccordionOpen
                        ? styles.stepsContainer
                        : { display: "none" }
                }
            >
                {trip.tips.map((tip, i) => (
                    <View
                        style={
                            i < trip.tips.length - 1 && {
                                borderBottomWidth: 1,
                                borderColor: SHADES.black02,
                                paddingBottom: 8,
                            }
                        }
                        key={`tip-${i}`}
                    >
                        <View style={styles.rowDisplay}>
                            <Text style={styles.stepTitle}>{tip.type}</Text>
                            <Text style={styles.fadeElement}>{tip.about}</Text>
                        </View>
                        <Text
                            style={[
                                styles.fadeElement,
                                { paddingHorizontal: 6 },
                            ]}
                        >
                            {tip.content}
                        </Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.stepsButtonContainer}>
                <Text style={styles.stepsButtonElement}>My tips on a map</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TripTipsDivision;
