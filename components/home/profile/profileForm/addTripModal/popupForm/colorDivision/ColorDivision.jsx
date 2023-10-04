import Slider from "@react-native-community/slider";
import { Dimensions, Text, View } from "react-native";
import { COLORS } from "../../../../../../../constants";

const windowWidth = Dimensions.get("window").width;

const ColorDivision = ({ color, handleRed, handleGreen, handleBlue }) => {
    const tripColor = `rgb(${color.red},${color.green},${color.blue})`;

    return (
        <View>
            <Text>Define the color of your trip!</Text>
            <View
                style={{ flexDirection: "row", gap: 12, alignItems: "center" }}
            >
                <View style={{ width: windowWidth * 0.9 - 144 }}>
                    <Slider
                        onValueChange={handleRed}
                        minimumValue={0}
                        maximumValue={255}
                        minimumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}
                        style={{
                            width: "100%",
                            height: 20,
                            paddingHorizontal: 0,
                            marginHorizontal: 0,
                        }}
                    />
                    <Slider
                        onValueChange={handleGreen}
                        minimumValue={0}
                        maximumValue={255}
                        minimumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}
                        style={{
                            width: "100%",
                            height: 20,
                        }}
                    />
                    <Slider
                        onValueChange={handleBlue}
                        minimumValue={0}
                        maximumValue={255}
                        minimumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}
                        style={{
                            width: "100%",
                            height: 20,
                        }}
                    />
                </View>
                <View
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 8,
                        backgroundColor: tripColor,
                    }}
                ></View>
            </View>
        </View>
    );
};

export default ColorDivision;
