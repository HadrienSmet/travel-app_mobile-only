import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ConnexionInput from "../connexionInput/ConnexionInput";
import styles from "./connexionInputContainer.style";

const ConnexionInputContainer = ({
    inputValue,
    inputHandler,
    inputPlaceholder,
    inputMode,
    blurHandler,
    message,
    checkOpacity,
    timesOpacity,
    borderColor,
}) => {
    return (
        <View>
            <View>
                <View style={styles.iconsContainer}>
                    <FontAwesome
                        style={[styles.iconStyle, checkOpacity]}
                        name="check"
                    />
                    <FontAwesome
                        style={[styles.iconStyle, timesOpacity]}
                        name="times"
                    />
                </View>
                <ConnexionInput
                    inputValue={inputValue}
                    inputHandler={inputHandler}
                    inputPlaceholder={inputPlaceholder}
                    inputMode={inputMode}
                    blurHandler={blurHandler}
                    borderColor={borderColor}
                />
            </View>
            <Text style={styles.messageStyle}>{message}</Text>
        </View>
    );
};

export default ConnexionInputContainer;
