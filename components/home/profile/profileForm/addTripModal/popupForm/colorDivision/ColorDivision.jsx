import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";
import { COLORS } from "../../../../../../../constants";
import styles from "./colorDivision.style";

const ColorDivision = ({ color, handleRed, handleGreen, handleBlue }) => {
    const tripColor = `rgb(${color.red},${color.green},${color.blue})`;

    return (
        <View>
            <Text>Define the color of your trip!</Text>
            <View style={styles.colorDivision}>
                <View style={styles.slidersContainer}>
                    <Slider
                        onValueChange={handleRed}
                        minimumValue={0}
                        maximumValue={255}
                        minimumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}
                        style={styles.slider}
                    />
                    <Slider
                        onValueChange={handleGreen}
                        minimumValue={0}
                        maximumValue={255}
                        minimumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}
                        style={styles.slider}
                    />
                    <Slider
                        onValueChange={handleBlue}
                        minimumValue={0}
                        maximumValue={255}
                        minimumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}
                        style={styles.slider}
                    />
                </View>
                <View
                    style={[
                        styles.colorContainer,
                        { backgroundColor: tripColor },
                    ]}
                ></View>
            </View>
        </View>
    );
};

export default ColorDivision;
