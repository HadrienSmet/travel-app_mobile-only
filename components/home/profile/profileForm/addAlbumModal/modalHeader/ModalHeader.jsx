import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./modalHeader.style";

const ModalHeader = ({ closeModal }) => {
    return (
        <>
            <View style={styles.closingButtonRow}>
                <TouchableOpacity onPress={closeModal}>
                    <FontAwesome
                        style={styles.closingButtonIcon}
                        name="times"
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.titleMain}>Create your album</Text>
        </>
    );
};

export default ModalHeader;
