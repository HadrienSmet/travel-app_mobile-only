import { TextInput } from "react-native";
import styles from "./connexionInput.style";
import { useEffect, useState } from "react";
import { COLORS, SHADES } from "../../../constants";

const ConnexionInput = ({
    inputValue,
    inputHandler,
    inputMode,
    inputPlaceholder,
    blurHandler,
    borderFocusColor,
    needToSecure,
    defaultBorder,
    isTextArea,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [focusStyle, setFocusStyle] = useState(null);

    const textAreaStyle = { height: 96, textAlignVertical: "top" };
    const inputDefaultBorder =
        defaultBorder === undefined ? { borderWidth: 0 } : defaultBorder;
    const inputFocusBorder =
        borderFocusColor === "blue" ? COLORS.primary : COLORS.secondary;
    const isPassword = needToSecure === undefined ? false : true;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        blurHandler !== undefined && blurHandler();
        setIsFocused(false);
    };

    useEffect(() => {
        if (isFocused) {
            setFocusStyle({ borderWidth: 2, borderColor: inputFocusBorder });
        } else {
            setFocusStyle(null);
        }
    }, [isFocused]);

    return (
        <TextInput
            inputMode={inputMode}
            onChangeText={inputHandler}
            value={inputValue}
            placeholder={inputPlaceholder}
            style={[
                styles.connexionInput,
                inputDefaultBorder,
                isFocused && focusStyle,
                isTextArea !== undefined && textAreaStyle,
            ]}
            onBlur={handleBlur}
            onFocus={handleFocus}
            secureTextEntry={isPassword}
        />
    );
};

export default ConnexionInput;
