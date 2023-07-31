import React from "react";
import { Image, View, Text } from "react-native";
import LoginForm from "../loginForm/LoginForm";
import styles from "./loginMain.style";

const LoginMain = () => {
    return (
        <View style={styles.loginMain}>
            <Image
                blurRadius={3}
                style={styles.loginBackgroundImage}
                source={require("../../../assets/images/post-bangladesh.jpg")}
            />
            <View style={styles.loginContent}>
                <Text style={styles.loginTitle}>
                    The perfect tool for every traveller
                </Text>
                <LoginForm />
            </View>
        </View>
    );
};

export default LoginMain;
