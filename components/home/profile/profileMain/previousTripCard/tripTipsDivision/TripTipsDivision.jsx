import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SHADES } from "../../../../../../constants";
import styles from "./tripTipsDivision.style";
import MarkersDisplayer from "../markersDisplayer/MarkersDisplayer";

const TripTipsDivision = ({
    isTipsAccordionOpen,
    toggleTipsAccordion,
    trip,
}) => {
    return (
        <View style={styles.basicDivision}>
            <View style={styles.rowDisplay}>
                <Text style={styles.tripScdTitle}>
                    The tips I learned during my journey
                </Text>
                <TouchableOpacity onPress={toggleTipsAccordion}>
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
            <MarkersDisplayer markersList={trip.tips} buttonText="tips" />
        </View>
    );
};

export default TripTipsDivision;