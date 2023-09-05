import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

import "react-native-gesture-handler";

import styles from "./listElement.style";
import ElementButtons from "./elementButtons/ElementButtons";
import ElementContent from "./elementContent/ElementContent";

const ListElement = ({ elem, index, tripList }) => {
    const [areButtonsVisible, setButtonsVisible] = useState(false);
    const toggleButtonsVisible = () => setButtonsVisible((state) => !state);

    return (
        <TouchableOpacity
            onPress={toggleButtonsVisible}
            style={
                index < tripList.length - 1
                    ? [styles.mapElementDivision, styles.elementBottomBorder]
                    : styles.mapElementDivision
            }
        >
            {areButtonsVisible ? (
                <ElementButtons />
            ) : (
                <ElementContent elem={elem} />
            )}
        </TouchableOpacity>
    );
};

export default ListElement;
