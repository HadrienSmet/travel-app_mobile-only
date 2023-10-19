import { Image, View, ScrollView, Text } from "react-native";
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
            <ScrollView contentContainerStyle={styles.personalsContent}>
                <View>
                    <Text style={styles.personalsTitle}>
                        Set your personals data
                    </Text>
                </View>
                <PersonalsForm />
            </ScrollView>
        </View>
    );
};

export default PersonalsMain;
