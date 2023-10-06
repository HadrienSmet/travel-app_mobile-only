import { View } from "react-native";
import styles from "./tripDetailsDisplayer.style";
import TripListDisplayer from "./tripListDisplayer/TripListDisplayer";
import { useSelector } from "react-redux";

const TripDetailsDisplayer = ({ tripTitle }) => {
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    return (
        <View style={styles.componentContainer}>
            <TripListDisplayer
                tripList={tripData.steps}
                tripTitle={`All the steps of ${tripTitle}`}
            />
        </View>
    );
};

export default TripDetailsDisplayer;
