import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./loginForm.style";
import ConnexionInput from "../../connexion/connexionInput/ConnexionInput";

const LoginForm = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.formContainer}>
            <View style={styles.loginInputsContainer}>
                <ConnexionInput
                    inputValue={mail}
                    inputHandler={setMail}
                    inputPlaceholder="Email"
                />
                <View style={styles.passwordView}>
                    <ConnexionInput
                        inputValue={password}
                        inputHandler={setPassword}
                        inputPlaceholder="Password"
                    />
                    <Text style={styles.forgetPasswordText}>
                        Forgot password?
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.loginButtonContainer}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginForm;
