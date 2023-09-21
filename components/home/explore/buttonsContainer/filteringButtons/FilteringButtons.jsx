import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./filteringButtons.style";

const FilteringButtons = ({
    isFiltering,
    isLookingSomething,
    handleIsLookingSomething,
    toggleFiltering,
}) => {
    const handlePress = (tips_about) => handleIsLookingSomething(tips_about);
    // const handleElementStyle = (filterAbout) => {
    //     if (isLookingSomething !== filterAbout) {
    //         return styles.defaultElement;
    //     } else {
    //         return styles.selectedElement;
    //     }
    // };
    const handleElementStyle = (filterAbout) =>
        isLookingSomething !== filterAbout
            ? styles.defaultElement
            : styles.selectedElement;

    // const handleBorderStyle = (filterAbout) => {
    //     if (isLookingSomething !== filterAbout) {
    //         return [styles.filterButton, styles.defaultBorder];
    //     } else {
    //         return [styles.filterButton, styles.selectedBorder];
    //     }
    // };
    const handleBorderStyle = (filterAbout) =>
        isLookingSomething !== filterAbout
            ? [styles.filterButton, styles.defaultBorder]
            : [styles.filterButton, styles.selectedBorder];

    return (
        <View>
            <TouchableOpacity
                onPress={toggleFiltering}
                style={styles.mainButtonContainer}
            >
                <FontAwesome
                    style={styles.mainButtonElement}
                    name="sliders-h"
                />
            </TouchableOpacity>
            {isFiltering && (
                <View style={styles.filtersContainer}>
                    <TouchableOpacity
                        onPress={() => handlePress("Activity")}
                        style={handleBorderStyle("Activity")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Activity")}
                            name="hiking"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Bar")}
                        style={handleBorderStyle("Bar")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Bar")}
                            name="beer"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Beach")}
                        style={handleBorderStyle("Beach")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Beach")}
                            name="umbrella-beach"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Hotel")}
                        style={handleBorderStyle("Hotel")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Hotel")}
                            name="bed"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Museum")}
                        style={handleBorderStyle("Museum")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Museum")}
                            name="palette"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Music")}
                        style={handleBorderStyle("Music")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Music")}
                            name="headphones"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Nature")}
                        style={handleBorderStyle("Nature")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Nature")}
                            name="campground"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Night life")}
                        style={handleBorderStyle("Night life")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Night life")}
                            name="cocktail"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Remains")}
                        style={handleBorderStyle("Remains")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Remains")}
                            name="university"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Restaurant")}
                        style={handleBorderStyle("Restaurant")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Restaurant")}
                            name="utensils"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Sport")}
                        style={handleBorderStyle("Sport")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Sport")}
                            name="table-tennis"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Swim")}
                        style={handleBorderStyle("Swim")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Swim")}
                            name="swimmer"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Transport")}
                        style={handleBorderStyle("Transport")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Transport")}
                            name="train"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Other...")}
                        style={handleBorderStyle("Other...")}
                    >
                        <FontAwesome
                            style={handleElementStyle("Other...")}
                            name="ellipsis-h"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default FilteringButtons;
