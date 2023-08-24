import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./previousTripCard.style";
import TripStepsDivision from "./tripStepsDivision/TripStepsDivision";
import TripTipsDivision from "./tripTipsDivision/TripTipsDivision";

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
                    <FontAwesome
                        style={
                            isAccordionOpen
                                ? [
                                      { transform: [{ rotate: "180deg" }] },
                                      styles.angleIcon,
                                  ]
                                : styles.angleIcon
                        }
                        name="angle-down"
                    />
                </TouchableOpacity>
            </View>
            <View
                style={
                    isAccordionOpen ? styles.basicDivision : { display: "none" }
                }
            >
                <View style={[styles.rowDisplay, { paddingTop: 8 }]}>
                    <Text style={styles.fadeElement}>{trip.type}</Text>
                    <Text style={styles.fadeElement}>{trip.withWhom}</Text>
                </View>
                <TripStepsDivision trip={trip} />
                {trip.tips.length !== 0 && <TripTipsDivision trip={trip} />}
            </View>
        </View>
    );
};

export default PreviousTripCard;
