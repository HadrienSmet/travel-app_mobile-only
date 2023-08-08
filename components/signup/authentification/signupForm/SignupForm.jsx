import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./signupForm.style";
import ConnexionInput from "../../../connexion/connexionInput/ConnexionInput";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useDispatch } from "react-redux";
import { setSignupData } from "../../../../features/signupData.slice";
import { useRouter } from "expo-router";
import { axiosCheckMail } from "../../../../utils/axios/user/axiosCheckMail";
import ConnexionInputContainer from "../../../connexion/connexionInputContainer/ConnexionInputContainer";

const useSignupEmail = () => {
    const [email, setEmail] = useState("");
    const [isEmailOk, setIsEmailOk] = useState(false);
    const [mailCheckOpacity, setMailCheckOpacity] = useState({ opacity: 0 });
    const [mailTimesOpacity, setMailTimesOpacity] = useState({ opacity: 0 });
    const [mailMessage, setMailMessage] = useState("");

    const handleFineMail = () => {
        setIsEmailOk(true);
        setMailMessage("");
        setMailCheckOpacity({ opacity: 1 });
        setMailTimesOpacity({ opacity: 0 });
    };

    const handleWrongMail = (message) => {
        setIsEmailOk(false);
        setMailMessage(message);
        setMailCheckOpacity({ opacity: 0 });
        setMailTimesOpacity({ opacity: 1 });
    };

    const handleMail = () => {
        if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            handleWrongMail("invalid mail adress");
        } else {
            axiosCheckMail(email)
                .then((res) => {
                    if (res.data === null) {
                        handleFineMail();
                    } else {
                        handleWrongMail("Mail adress already existing");
                    }
                })
                .catch(() => handleFineMail());
        }
    };

    return {
        mailCheckOpacity,
        mailTimesOpacity,
        email,
        isEmailOk,
        mailMessage,
        setEmail,
        handleMail,
    };
};

const useSignupPassword = () => {
    const [password, setPassword] = useState("");
    const [isPasswordOk, setIsPasswordOk] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState("");
    const [progressBarBgStyle, setProgressBarBgStyle] = useState({
        backgroundColor: "transparent",
        width: 0,
    });
    const [passwordCheckOpacity, setPasswordCheckOpacity] = useState({
        opacity: 0,
    });
    const [passwordTimesOpacity, setPasswordTimesOpacity] = useState({
        opacity: 0,
    });

    const handleWrongPassword = () => {
        setIsPasswordOk(false);
        setPasswordMsg(
            "Need 8 characters minimum including: an uppercase, a lowercase, a digit and a special character"
        );
        setPasswordCheckOpacity({ opacity: 0 });
        setPasswordTimesOpacity({ opacity: 1 });
        setProgressBarBgStyle({
            backgroundColor: "red",
            width: "30%",
        });
    };

    const handleFinePassword = () => {
        setIsPasswordOk(true);
        setPasswordMsg("Password strong. Add more characters for more safety");
        setProgressBarBgStyle({
            backgroundColor: "yellow",
            width: "60%",
        });
        setPasswordCheckOpacity({ opacity: 1 });
        setPasswordTimesOpacity({ opacity: 0 });
    };

    const handleGreatPassword = () => {
        setIsPasswordOk(true);
        setPasswordMsg("Strong password");
        setProgressBarBgStyle({
            backgroundColor: "green",
            width: "100%",
        });
        setPasswordCheckOpacity({ opacity: 1 });
        setPasswordTimesOpacity({ opacity: 0 });
    };
    //This function handles the behavior of the input password and his data
    //Called on a onBlur event it displays a message if the data provided by the user doesn't fit our expectations
    //It handles the behavior of a bar indicating the level of security of his password
    //And it also show or hide icons that indicates the user if he did well
    const handlePassword = () => {
        setProgressBarBgStyle({
            backgroundColor: "transparent",
            width: 0,
        });
        setPasswordMsg("");
        if (
            !password.match(
                /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
            )
        ) {
            handleWrongPassword();
        } else if (password.length < 12) {
            handleFinePassword();
        } else {
            handleGreatPassword();
        }
    };

    return {
        password,
        isPasswordOk,
        progressBarBgStyle,
        passwordMsg,
        passwordCheckOpacity,
        passwordTimesOpacity,
        setPassword,
        handlePassword,
    };
};

const SignupForm = () => {
    const {
        mailCheckOpacity,
        mailTimesOpacity,
        email,
        isEmailOk,
        mailMessage,
        setEmail,
        handleMail,
    } = useSignupEmail();
    const {
        password,
        isPasswordOk,
        progressBarBgStyle,
        passwordMsg,
        passwordCheckOpacity,
        passwordTimesOpacity,
        setPassword,
        handlePassword,
    } = useSignupPassword();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleConfirm = () => {
        if (isEmailOk && isPasswordOk) {
            const data = {
                email,
                password,
            };
            dispatch(setSignupData(data));
            router.push("personals");
        } else {
            alert("Those fields are mandatory");
        }
    };

    return (
        <View style={styles.formContainer}>
            <View style={styles.signupInputsContainer}>
                <ConnexionInputContainer
                    inputValue={email}
                    inputHandler={setEmail}
                    inputPlaceholder="Email"
                    blurHandler={handleMail}
                    message={mailMessage}
                    checkOpacity={mailCheckOpacity}
                    timesOpacity={mailTimesOpacity}
                />
                <View style={styles.passwordView}>
                    <View>
                        <View style={styles.iconsContainer}>
                            <FontAwesome
                                style={[styles.iconStyle, passwordCheckOpacity]}
                                name="check"
                            />
                            <FontAwesome
                                style={[styles.iconStyle, passwordTimesOpacity]}
                                name="times"
                            />
                        </View>
                        <ConnexionInput
                            inputValue={password}
                            inputHandler={setPassword}
                            inputPlaceholder="Password"
                            blurHandler={handlePassword}
                        />
                    </View>
                    <View style={styles.passwordSecurityBar}>
                        <View
                            style={[progressBarBgStyle, { height: "100%" }]}
                        ></View>
                    </View>
                    <Text style={styles.messageStyle}>{passwordMsg}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={handleConfirm}
                style={styles.signupButtonContainer}
            >
                <Text style={styles.signupButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupForm;
