import { View } from "react-native";
import styles from "./tripDetailsDisplayer.style";
import TripListDisplayer from "./tripListDisplayer/TripListDisplayer";
import { useSelector } from "react-redux";

const TripDetailsDisplayer = ({ tripTitle }) => {
    const previousTripData = useSelector(
        (state) => state.previousTripReducer.previousTripData
    );
    return (
        <View style={styles.componentContainer}>
            <TripListDisplayer
                tripList={previousTripData.steps}
                tripTitle={`All the steps of ${tripTitle}`}
            />
            <TripListDisplayer
                tripList={previousTripData.tips}
                tripTitle={`The tips I learned during ${tripTitle}`}
            />
        </View>
    );
};

export default TripDetailsDisplayer;
