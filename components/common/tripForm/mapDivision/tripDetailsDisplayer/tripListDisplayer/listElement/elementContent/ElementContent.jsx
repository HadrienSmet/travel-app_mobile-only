import React from "react";
import { Text, View } from "react-native";
import styles from "./elementContent.style";

const ElementContent = ({ elem }) => {
    return (
        <View>
            <View style={styles.mapElementHeader}>
                <Text style={styles.elementTitle}>{elem.type}</Text>
                <Text style={styles.elementContent}>
                    {elem.date !== undefined
                        ? `${elem.date.day}/${elem.date.month}/${elem.date.year}`
                        : elem.about}
                </Text>
            </View>
            {elem.content !== "" && (
                <Text style={styles.elementContent}>{elem.content}</Text>
            )}
        </View>
    );
};

export default ElementContent;
