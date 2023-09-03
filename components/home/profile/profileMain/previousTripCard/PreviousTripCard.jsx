import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./previousTripCard.style";
import TripStepsDivision from "./tripStepsDivision/TripStepsDivision";
import TripTipsDivision from "./tripTipsDivision/TripTipsDivision";
import { COLORS } from "../../../../../constants";

const useTripAccordions = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isStepsAccordionOpen, setIsStepsAccordionOpen] = useState(false);
    const [isTipsAccordionOpen, setIsTipssAccordionOpen] = useState(false);

    const closeStepsAccordion = () => setIsStepsAccordionOpen(false);
    const closeTipsAccordion = () => setIsTipssAccordionOpen(false);
    const toggleStepsAccordion = () =>
        setIsStepsAccordionOpen((state) => !state);
    const toggleTipsAccordion = () =>
        setIsTipssAccordionOpen((state) => !state);
    const toggleAccordion = () => {
        closeStepsAccordion();
        closeTipsAccordion();
        setIsAccordionOpen((state) => !state);
    };

    return {
        isAccordionOpen,
        isStepsAccordionOpen,
        isTipsAccordionOpen,
        toggleAccordion,
        toggleStepsAccordion,
        toggleTipsAccordion,
    };
};

const PreviousTripCard = ({ trip, index }) => {
    const {
        isAccordionOpen,
        isStepsAccordionOpen,
        isTipsAccordionOpen,
        toggleAccordion,
        toggleStepsAccordion,
        toggleTipsAccordion,
    } = useTripAccordions();

    return (
        <View style={styles.tripContainer} key={`trip-${index}`}>
            <View
                style={[
                    styles.rowDisplay,
                    {
                        backgroundColor: COLORS.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                    },
                ]}
            >
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
                <View
                    style={[
                        styles.rowDisplay,
                        { paddingTop: 8, paddingHorizontal: 16 },
                    ]}
                >
                    <Text style={styles.fadeElement}>{trip.type}</Text>
                    <Text style={styles.fadeElement}>{trip.withWhom}</Text>
                </View>
                <TripStepsDivision
                    isStepsAccordionOpen={isStepsAccordionOpen}
                    toggleStepsAccordion={toggleStepsAccordion}
                    trip={trip}
                />
                {trip.tips.length !== 0 && (
                    <TripTipsDivision
                        isTipsAccordionOpen={isTipsAccordionOpen}
                        toggleTipsAccordion={toggleTipsAccordion}
                        trip={trip}
                    />
                )}
            </View>
        </View>
    );
};

export default PreviousTripCard;
