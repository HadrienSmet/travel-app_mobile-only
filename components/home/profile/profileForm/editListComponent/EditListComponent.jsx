import { View, FlatList, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const EditListComponent = ({ componentTitle, listToEdit, handleEdit }) => {
    return (
        <View>
            <Text>{componentTitle}</Text>
            <View>
                <FlatList
                    data={listToEdit}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item) => item}
                />
                <FontAwesome name="plus" onPress={handleEdit} />
            </View>
        </View>
    );
};

export default EditListComponent;
