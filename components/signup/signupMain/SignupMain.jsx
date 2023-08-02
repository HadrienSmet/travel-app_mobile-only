import React from "react";
import { Image, View, Text } from "react-native";
import SignupForm from "../signupForm/SignupForm";
import styles from "./signupMain.style";

const SignupMain = () => {
    return (
        <View style={styles.signupMain}>
            <Image
                blurRadius={3}
                style={styles.signupBackgroundImage}
                source={require("../../../assets/images/post-bangladesh.jpg")}
            />
            <View style={styles.signupContent}>
                <View>
                    <Text style={styles.signupTitle}>Welcome new user!</Text>
                    <Text style={styles.signupSubTitle}>
                        Define your email and password
                    </Text>
                </View>
                <SignupForm />
            </View>
        </View>
    );
};

export default SignupMain;
