import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

import { axiosSignIn } from "../../../utils/axios/user/axiosSignin";
import { saveJwtToken } from "../../../utils/functions/saveJwtToken";

import ConnexionInput from "../../connexion/connexionInput/ConnexionInput";
import styles from "./loginForm.style";

const LoginForm = () => {
    const router = useRouter();
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = () => {
        if (email !== "" && password !== "") {
            const data = { email, password };
            axiosSignIn(data)
                .then((res) => {
                    saveJwtToken(res.data);
                    router.push("/home");
                })
                .catch((err) => console.log(err));
        } else {
            alert("Those fields are requiered");
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.loginInputsContainer}>
                <ConnexionInput
                    inputValue={email}
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
