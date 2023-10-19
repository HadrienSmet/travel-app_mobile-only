import { Text, View } from "react-native";
import { timestampToDate } from "../../../../../../../utils/functions";
import styles from "./stepContainer.style";

const StepContainer = ({ step }) => {
    const { type, date, content } = step;

    return (
        <View style={styles.stepContainer}>
            <View style={styles.setpHeader}>
                <Text style={styles.stepType}>{type}</Text>
                <Text>{timestampToDate(date)}</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
                <Text style={styles.stepContent}>{content}</Text>
                {/* <ButtonsContainer
                    isEditing={isEditing}
                    setEditing={setEditing}
                /> */}
            </View>
            <View style={styles.borderBottom}></View>
        </View>
    );
};

export default StepContainer;
