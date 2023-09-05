import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
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
                        // <View
                        //     key={`elem-${index}`}
                        //     style={
                        //         index < tripList.length - 1
                        //             ? [
                        //                   styles.mapElementDivision,
                        //                   styles.elementBottomBorder,
                        //               ]
                        //             : styles.mapElementDivision
                        //     }
                        // >
                        //     {/* <View style={styles.mapElementHeader}>
                        //         <TouchableOpacity
                        //             style={[
                        //                 styles.elementButtonContainer,
                        //                 styles.editButton,
                        //             ]}
                        //         >
                        //             <FontAwesome name="edit" />
                        //         </TouchableOpacity>
                        //         <TouchableOpacity
                        //             style={[
                        //                 styles.elementButtonContainer,
                        //                 styles.deleteButton,
                        //             ]}
                        //         >
                        //             <FontAwesome name="times" />
                        //         </TouchableOpacity>
                        //     </View> */}
                        //     <View on>
                        //         <View style={styles.mapElementHeader}>
                        //             <Text style={styles.elementTitle}>
                        //                 {elem.type}
                        //             </Text>
                        //             <Text style={styles.elementContent}>
                        //                 {elem.date !== undefined
                        //                     ? `${elem.date.day}/${elem.date.month}/${elem.date.year}`
                        //                     : elem.about}
                        //             </Text>
                        //         </View>
                        //         {elem.content !== "" && (
                        //             <Text style={styles.elementContent}>
                        //                 {elem.content}
                        //             </Text>
                        //         )}
                        //     </View>
                        // </View>
                    ))}
                </View>
            )}
        </>
    );
};

export default TripListDisplayer;
