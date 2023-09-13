import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./modalForm.style";

const useModalForm = (setUrlArray) => {
    const pushUrl = (url) => setUrlArray((state) => [...state, url]);
    // const pushBlob = async (uri) => {
    //     const fileInfo = await FileSystem.getInfoAsync(uri);
    //     const fileBlob = await FileSystem.readAsStringAsync(uri, {
    //         encoding: FileSystem.EncodingType.Base64,
    //     });

    //     setBlobArray((state) => [...state, { uri, blob: fileBlob }]);
    // };

    const pickProfilePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            pushUrl(result.assets[0].uri);
            // pushBlob(result.assets[0].uri);
        } else {
            alert("Canceled");
        }
    };

    return {
        pickProfilePicture,
    };
};

const ModalForm = ({ urlArray, title, setTitle, setUrlArray }) => {
    const { pickProfilePicture } = useModalForm(setUrlArray);
    const handleConfirm = () => {
        console.log("title: ");
        console.log(title);
        console.log("urlArray: ");
        console.log(urlArray);
        const data = new FormData();
        data.append("title", title);
        data.append("files", urlArray);
    };
    return (
        <>
            <TextInput
                value={title}
                placeholder="Album title"
                onChangeText={setTitle}
                style={styles.albumTitleInput}
            />
            <View style={styles.pictureButtonRow}>
                <TouchableOpacity
                    style={styles.pictureButtonContainer}
                    onPress={pickProfilePicture}
                >
                    <Text style={styles.pictureButtonElement}>Add picture</Text>
                    <FontAwesome
                        style={styles.pictureButtonElement}
                        name="camera"
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.picturesScrollView}>
                <View style={styles.picturesDisplayer}>
                    {urlArray.length !== 0 &&
                        urlArray.map((url, index) => (
                            <Image
                                source={{ uri: url }}
                                alt="picture provided by the user for the album"
                                key={`picture-${index}`}
                                style={styles.pictureStyle}
                            />
                        ))}
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={handleConfirm}
                style={styles.confirmButtonContainer}
            >
                <Text style={styles.confirmButtonElement}>Confirm</Text>
            </TouchableOpacity>
        </>
    );
};

export default ModalForm;
