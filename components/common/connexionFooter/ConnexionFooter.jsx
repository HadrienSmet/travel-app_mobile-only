import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./connexionFooter.style";

const ConnexionFooter = ({ firstWord, link }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                {firstWord} have an account?
            </Text>
            <TouchableOpacity>
                <Text style={styles.linkText}>{link}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConnexionFooter;
