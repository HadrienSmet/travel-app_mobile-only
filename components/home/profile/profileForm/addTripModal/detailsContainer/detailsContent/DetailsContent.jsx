import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { axiosPushTrip } from "../../../../../../../utils/axios/user";
import { setUserData } from "../../../../../../../features/userData.slice";
import styles from "./detailsContent.style";
import StepContainer from "../stepContainer/StepContainer";

const useDetailsContent = (handleClose) => {
    const dispatch = useDispatch();
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    const userData = useSelector((state) => state.userDataReducer.userData);
    const { type, withWhom, color, title } = tripData;

    const handleConfirm = () => {
        const data = tripData;
        if (color && title && withWhom && type) {
            axiosPushTrip(userData._id, data, userData.token)
                .then(() => {
                    const dispatchData = {
                        previousTrips: [...userData.previousTrips, data],
                    };
                    dispatch(setUserData(dispatchData));
                    handleClose();
                })
                .catch((err) => alert(err));
        } else {
            alert(
                "Need to define a title, a type and to share with whom you traveled with"
            );
        }
    };

    return {
        tripData,
        handleConfirm,
    };
};

const DetailsContent = ({ areDetailsVisible, handleClose }) => {
    const { tripData, handleConfirm } = useDetailsContent(handleClose);
    const { type, withWhom, steps } = tripData;
    return (
        <>
            {areDetailsVisible && (
                <View style={styles.detailsContent}>
                    <ScrollView>
                        <View style={styles.scrollContent}>
                            <View style={styles.detailsRow}>
                                <Text>{type}</Text>
                                <Text>{withWhom}</Text>
                            </View>
                            {steps.length !== 0 && (
                                <View style={styles.stepsContainer}>
                                    {steps.map((step, index) => (
                                        <StepContainer
                                            step={step}
                                            key={`index-${index}`}
                                        />
                                    ))}
                                </View>
                            )}
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={handleConfirm}
                            >
                                <Text style={styles.buttonContent}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )}
        </>
    );
};

export default DetailsContent;
