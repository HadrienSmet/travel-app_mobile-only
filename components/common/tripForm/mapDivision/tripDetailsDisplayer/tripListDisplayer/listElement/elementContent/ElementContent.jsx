import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./elementContent.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../../../../../../../../constants";
import { useDispatch } from "react-redux";
import { patchSteps } from "../../../../../../../../features/tripData.slice";

const useElementContent = (tripList, index, elem, endEdit) => {
    const dispatch = useDispatch();
    const [content, setContent] = useState(
        elem.content !== "" ? elem.content : ""
    );
    const [date, setDate] = useState(
        elem.date !== undefined
            ? {
                  day: elem.date.day,
                  month: elem.date.month,
                  year: elem.date.year,
              }
            : {
                  day: undefined,
                  month: undefined,
                  year: undefined,
              }
    );
    const handleDay = (value) => setDate({ ...date, day: value });
    const handleMonth = (value) => setDate({ ...date, month: value });
    const handleYear = (value) => setDate({ ...date, year: value });
    const handleBlur = () => {
        if (parseInt(tripList[index - 1].date.year) > parseInt(date.year))
            setDate(tripList[index - 1].date.year);
    };

    const handleEdit = () => {
        const data = {
            type: elem.type,
            location: elem.location,
            date,
            content,
        };
        let array = [...tripList];
        array.splice(index, 1, data);
        dispatch(patchSteps(array));
        endEdit();
    };

    return {
        content,
        date,
        handleDay,
        handleMonth,
        handleYear,
        handleBlur,
        handleEdit,
        setContent,
    };
};

const ElementContent = ({ props }) => {
    const { elem, index, tripList, isEditing, endEdit } = props;
    const {
        content,
        date,
        handleDay,
        handleMonth,
        handleYear,
        handleBlur,
        handleEdit,
        setContent,
    } = useElementContent(tripList, index, elem, endEdit);
    return (
        <View style={{ alignItems: "center" }}>
            <View style={styles.mapElementHeader}>
                <Text style={styles.elementTitle}>{elem.type}</Text>
                {elem.date !== undefined && isEditing && (
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <TextInput
                            value={date.day}
                            placeholder="dd"
                            onChangeText={handleDay}
                            inputMode="numeric"
                            style={{ textAlign: "center" }}
                        />
                        <Text style={styles.elementContent}>/</Text>
                        <TextInput
                            value={date.month}
                            placeholder="mm"
                            onChangeText={handleMonth}
                            inputMode="numeric"
                            style={{ textAlign: "center" }}
                        />
                        <Text style={styles.elementContent}>/</Text>
                        <TextInput
                            value={date.year}
                            placeholder="yyyy"
                            onChangeText={handleYear}
                            onBlur={handleBlur}
                            inputMode="numeric"
                        />
                    </View>
                )}
                {elem.date !== undefined && !isEditing && (
                    <Text style={styles.elementContent}>
                        {elem.date.day}/{elem.date.month}/{elem.date.year}
                    </Text>
                )}
            </View>
            {elem.content !== "" && isEditing && (
                <TextInput
                    multiline
                    numberOfLines={6}
                    value={content}
                    onChangeText={setContent}
                    placeholder={`My ${elem.type}...`}
                />
            )}
            {elem.content !== "" && !isEditing && (
                <Text style={styles.elementContent}>{elem.content}</Text>
            )}
            {isEditing && (
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        paddingHorizontal: 12,
                        paddingVertical: 4,
                        borderRadius: 4,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 20,
                    }}
                    onPress={handleEdit}
                >
                    <Text style={{ color: COLORS.white, fontWeight: "700" }}>
                        Edit
                    </Text>
                    <FontAwesome style={{ color: COLORS.white }} name="edit" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default ElementContent;
