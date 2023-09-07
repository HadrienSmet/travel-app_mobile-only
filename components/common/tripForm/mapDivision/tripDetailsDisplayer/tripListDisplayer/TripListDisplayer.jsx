import React from "react";
import { Text, View } from "react-native";

import styles from "./tripListDisplayer.style";
import ListElement from "./listElement/ListElement";

const TripListDisplayer = ({ tripList, tripTitle }) => {
    return (
        <>
            {tripList.length !== 0 && (
                <View style={styles.basicDivision}>
                    <Text style={styles.divisionTitle}>{tripTitle}</Text>
                    {tripList.map((elem, index) => (
                        <ListElement
                            key={`elem-${index}`}
                            elem={elem}
                            index={index}
                            tripList={tripList}
                        />
                    ))}
                </View>
            )}
        </>
    );
};

export default TripListDisplayer;
