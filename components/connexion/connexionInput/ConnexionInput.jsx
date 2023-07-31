import { TextInput } from "react-native";
import styles from "./connexionInput.style";

const ConnexionInput = ({ inputValue, inputHandler, inputPlaceholder }) => {
    return (
        <TextInput
            onChange={inputHandler}
            value={inputValue}
            placeholder={inputPlaceholder}
            style={styles.connexionInput}
        />
    );
};

export default ConnexionInput;
