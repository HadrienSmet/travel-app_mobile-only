import { View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS, SHADES } from "../../../../../constants";
import styles from "./editListComponent.style";

const EditListComponent = ({
    componentTitle,
    listToEdit,
    listPlaceholder,
    handleEdit,
    userCurrentList,
}) => {
    return (
        <View style={styles.componentContainer}>
            <Text style={styles.titleStyle}>{componentTitle}</Text>
            <View style={styles.listView}>
                <SelectList
                    boxStyles={styles.listContainer}
                    inputStyles={styles.listElement}
                    dropdownStyles={styles.dropDownStyle}
                    data={listToEdit}
                    search={false}
                    save="value"
                    setSelected={(val) => handleEdit(val)}
                    label="Languages"
                    arrowicon={
                        <FontAwesome style={styles.iconStyle} name="plus" />
                    }
                />
                <Text
                    style={
                        userCurrentList === undefined
                            ? [styles.userListStyle, { color: SHADES.black04 }]
                            : [
                                  styles.userListStyle,
                                  { color: COLORS.black, fontWeight: "600" },
                              ]
                    }
                >
                    {listPlaceholder}
                </Text>
            </View>
        </View>
    );
};

export default EditListComponent;
