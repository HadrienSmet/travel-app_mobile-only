import { useState } from "react";
import { View } from "react-native";
import AddingButtons from "./addingButtons/AddingButtons";
import FilteringButtons from "./filteringButtons/FilteringButtons";
import LearningButtons from "./learningButtons/LearningButtons";
import styles from "./buttonsContainer.style";

const ButtonsContainer = ({
    isLookingSomething,
    handlePinState,
    handleIsLookingSomething,
}) => {
    const [isAddingTips, setIsAddingTips] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    const [isLearning, setIsLearning] = useState(false);

    const toggleAddTips = () => setIsAddingTips((state) => !state);
    const toggleFiltering = () => setIsFiltering((state) => !state);
    const toggleLearning = () => setIsLearning((state) => !state);

    return (
        <View style={styles.buttonsContainer}>
            <AddingButtons
                isAddingTips={isAddingTips}
                handlePinState={handlePinState}
                toggleAddTips={toggleAddTips}
            />
            <FilteringButtons
                isFiltering={isFiltering}
                isLookingSomething={isLookingSomething}
                handleIsLookingSomething={handleIsLookingSomething}
                toggleFiltering={toggleFiltering}
            />
            <LearningButtons
                isLearning={isLearning}
                isLookingSomething={isLookingSomething}
                handleIsLookingSomething={handleIsLookingSomething}
                toggleLearning={toggleLearning}
            />
        </View>
    );
};

export default ButtonsContainer;
