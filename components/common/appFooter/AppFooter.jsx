import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./appFooter.style";
import { COLORS } from "../../../constants";

const AppFooter = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerBefore}></View>
            <TouchableOpacity>
                <FontAwesome style={styles.footerElement} name="users" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome style={styles.footerElement} name="comments" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome style={styles.footerElement} name="compass" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome
                    style={[styles.footerElement, { color: COLORS.secondary }]}
                    name="user"
                />
            </TouchableOpacity>
        </View>
    );
};

export default AppFooter;
