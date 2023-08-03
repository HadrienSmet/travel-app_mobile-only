import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./loginForm.style";
import ConnexionInput from "../../connexion/connexionInput/ConnexionInput";
import { useRouter } from "expo-router";

const LoginForm = () => {
    const router = useRouter();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = () => {
        router.push("personals");
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.loginInputsContainer}>
                <ConnexionInput
                    inputValue={mail}
                    inputHandler={setMail}
                    inputPlaceholder="Email"
                    blurHandler={undefined}
                />
                <View style={styles.passwordView}>
                    <ConnexionInput
                        inputValue={password}
                        inputHandler={setPassword}
                        inputPlaceholder="Password"
                        blurHandler={undefined}
                    />
                    <Text style={styles.forgetPasswordText}>
                        Forgot password?
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={handlePress}
                style={styles.loginButtonContainer}
            >
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginForm;
