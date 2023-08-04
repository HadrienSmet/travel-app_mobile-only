import React from "react";
import { Image, View, Text } from "react-native";
import PersonalsForm from "../personalsForm/PersonalsForm";
import styles from "./personalsMain.style";

const PersonalsMain = () => {
    return (
        <View style={styles.personalsMain}>
            <Image
                blurRadius={4}
                style={styles.personalsBackgroundImage}
                source={require("../../../../assets/images/post-bangladesh.jpg")}
            />
            <View style={styles.personalsContent}>
                <View>
                    <Text style={styles.personalsTitle}>
                        Set your personals data
                    </Text>
                    {/* <Text style={styles.personalsSubTitle}>
                        Define your email and password
                    </Text> */}
                </View>
                <PersonalsForm />
            </View>
        </View>
    );
};

export default PersonalsMain;
