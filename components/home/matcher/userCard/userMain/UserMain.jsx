import { View, Image } from "react-native";
import styles from "./userMain.style";

const UserMain = () => {
    return (
        <View style={styles.userMainStyle}>
            <Image
                // source={require("../../../../../assets/images/post-bangladesh.jpg")}
                source={require("../../../../../assets/images/post-bangladesh.jpg")}
                style={styles.imageStyle}
            />
        </View>
    );
};

export default UserMain;
