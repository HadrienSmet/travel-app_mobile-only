import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import "react-native-gesture-handler";

import styles from "./listElement.style";
import ElementButtons from "./elementButtons/ElementButtons";
import ElementContent from "./elementContent/ElementContent";
import { useDispatch } from "react-redux";
import { removeStep } from "../../../../../../../features/previousTripData.slice";

const ListElement = ({ elem, index, tripList }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [areButtonsVisible, setButtonsVisible] = useState(false);
    const toggleButtonsVisible = () => setButtonsVisible((state) => !state);
    const editElement = () => {
        setButtonsVisible(false);
        setIsEditing(true);
    };
    const endEdit = () => setIsEditing(false);
    const deleteElement = () => {
        dispatch(removeStep(index));
        setButtonsVisible(false);
    };
    const contentProps = {
        elem,
        index,
        tripList,
        isEditing,
        endEdit,
    };

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
                <ElementButtons
                    deleteElement={deleteElement}
                    editElement={editElement}
                />
            ) : (
                <ElementContent props={contentProps} />
            )}
        </TouchableOpacity>
    );
};

export default ListElement;
