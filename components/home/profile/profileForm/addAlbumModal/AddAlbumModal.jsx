import { Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./addAlbumModal.style";

const AddAlbumModal = () => {
    return (
        <TouchableOpacity
            style={[styles.basicContainerStyle, styles.buttonContainer]}
        >
            <FontAwesome style={styles.buttonElement} name="camera" />
            <Text style={styles.buttonElement}>Edit albums</Text>
        </TouchableOpacity>
    );
};

export default AddAlbumModal;
