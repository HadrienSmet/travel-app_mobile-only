import React from "react";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import styles from "./learningButtons.style";

const LearningButtons = ({
    isLearning,
    handleIsLookingSomething,
    toggleLearning,
}) => {
    const handlePress = (tips_about) => handleIsLookingSomething(tips_about);
    return (
        <View>
            <TouchableOpacity
                style={styles.mainButtonContainer}
                onPress={toggleLearning}
            >
                <FontAwesome style={styles.mainButtonElement} name="question" />
            </TouchableOpacity>
            {isLearning && (
                <View style={styles.knowledgeContainer}>
                    <TouchableOpacity
                        onPress={() => handlePress("Advice")}
                        style={[styles.knowledgeButton, styles.defaultBorder]}
                    >
                        <FontAwesome
                            style={[
                                styles.knowledgeElement,
                                styles.knowledgeFirstElement,
                            ]}
                            name="smile"
                        />
                        <FontAwesome
                            style={[
                                styles.knowledgeElement,
                                styles.knowledgeSecondElement,
                            ]}
                            name="thumbs-up"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Bad experience")}
                        style={[
                            styles.knowledgeButton,
                            styles.defaultBorder,
                            { flexDirection: "column-reverse" },
                        ]}
                    >
                        <FontAwesome
                            style={[
                                styles.knowledgeElement,
                                styles.knowledgeFirstElement,
                            ]}
                            name="frown"
                        />
                        <FontAwesome
                            style={[
                                styles.knowledgeElement,
                                styles.knowledgeSecondElement,
                            ]}
                            name="thumbs-down"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Cheap")}
                        style={[styles.knowledgeButton, styles.defaultBorder]}
                    >
                        <FontAwesome
                            style={styles.knowledgeElement}
                            name="piggy-bank"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Danger")}
                        style={[styles.knowledgeButton, styles.defaultBorder]}
                    >
                        <FontAwesome
                            style={styles.knowledgeElement}
                            name="ban"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handlePress("Scum")}
                        style={[styles.knowledgeButton, styles.defaultBorder]}
                    >
                        <FontAwesome
                            style={styles.knowledgeElement}
                            name="poop"
                        />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default LearningButtons;
