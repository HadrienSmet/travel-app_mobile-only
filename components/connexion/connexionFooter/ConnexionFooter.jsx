import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./connexionFooter.style";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";

const ConnexionFooter = ({ firstWord, link }) => {
    const router = useRouter();
    const linkStyle = {
        color: link === "Sign Up" ? COLORS.primary : COLORS.secondary,
    };

    const handlePress = () => {
        const route = link === "Sign Up" ? "/signup" : "/";
        router.push(route);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>
                {firstWord} have an account?
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text
                    onPress={handlePress}
                    style={{ ...styles.linkText, ...linkStyle }}
                >
                    {link}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConnexionFooter;
