import { TextInput } from "react-native";
import styles from "./connexionInput.style";
import { useEffect, useState } from "react";
import { COLORS } from "../../../constants";

const ConnexionInput = ({
    inputValue,
    inputHandler,
    inputMode,
    inputPlaceholder,
    blurHandler,
    borderColor,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [focusStyle, setFocusStyle] = useState(null);
    const inputBorder =
        borderColor === "blue" ? COLORS.primary : COLORS.secondary;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        blurHandler();
        setIsFocused(false);
    };

    useEffect(() => {
        if (isFocused) {
            setFocusStyle({ borderWidth: 2, borderColor: inputBorder });
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
            style={[styles.connexionInput, isFocused && focusStyle]}
            onBlur={handleBlur}
            onFocus={handleFocus}
        />
    );
};

export default ConnexionInput;
