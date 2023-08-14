import {
    Platform,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const useDatePicker = () => {
    const [date, setDate] = useState(undefined);
    const [dateOfBirth, setDateOfBirth] = useState(undefined);
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => setShowPicker((state) => !state);
    const changeDate = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === "android") {
                togglePicker();
                setDateOfBirth(currentDate.toDateString());
            }
        } else {
            togglePicker();
        }
    };

    return {
        date,
        dateOfBirth,
        showPicker,
        changeDate,
        togglePicker,
    };
};

const DatePicker = () => {
    const { date, dateOfBirth, showPicker, changeDate, togglePicker } =
        useDatePicker();
    return (
        <>
            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    display="spinner"
                    mode="date"
                    is24Hour={true}
                    onChange={changeDate}
                />
            )}
            {showPicker && Platform.OS === "ios" && (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <TouchableOpacity onPress={togglePicker}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={togglePicker}>
                        <Text>Confirm</Text>
                    </TouchableOpacity>
                </View>
            )}
            {!showPicker && (
                <Pressable onPress={togglePicker}>
                    <TextInput
                        placeholder="Sat Aug 21 2004"
                        value={dateOfBirth}
                        onChangeText={null}
                        editable={false}
                        onPressIn={togglePicker}
                    />
                </Pressable>
            )}
        </>
    );
};

export default DatePicker;
