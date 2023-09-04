import { View } from "react-native";
import styles from "./tripDetailsDisplayer.style";
import TripListDisplayer from "./tripListDisplayer/TripListDisplayer";

const TripDetailsDisplayer = ({ tripTips, tripSteps, tripTitle }) => {
    return (
        <View style={styles.componentContainer}>
            <TripListDisplayer
                tripList={tripSteps}
                tripTitle={`All the steps of ${tripTitle}`}
            />
            <TripListDisplayer
                tripList={tripTips}
                tripTitle={`The tips I learned during ${tripTitle}`}
            />
        </View>
    );
};

export default TripDetailsDisplayer;
