import { TextInput } from "react-native";
import styles from "./connexionInput.style";

const ConnexionInput = ({
    inputValue,
    inputHandler,
    blurHandler,
    inputPlaceholder,
}) => {
    return (
        <TextInput
            onChangeText={inputHandler}
            value={inputValue}
            placeholder={inputPlaceholder}
            style={styles.connexionInput}
            onBlur={blurHandler}
        />
    );
};

export default ConnexionInput;
