import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./addAlbumModal.style";
import { useEffect, useState } from "react";
import ModalHeader from "./modalHeader/ModalHeader";
import ModalForm from "./modalForm/ModalForm";

const useAddAlbumModal = () => {
    const [urlArray, setUrlArray] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState("");

    const openModal = () => setIsVisible(true);
    const closeModal = () => {
        setTitle("");
        setUrlArray([]);
        setIsVisible(false);
    };

    useEffect(() => {
        console.log("urlArray");
        console.log(urlArray);
    }, [urlArray]);

    return {
        urlArray,
        isVisible,
        title,
        closeModal,
        openModal,
        setUrlArray,
        setTitle,
    };
};

const AddAlbumModal = () => {
    const {
        urlArray,
        isVisible,
        title,
        closeModal,
        openModal,
        setUrlArray,
        setTitle,
    } = useAddAlbumModal();
    return (
        <>
            <Modal visible={isVisible}>
                <View style={styles.modalStyle}>
                    <ModalHeader closeModal={closeModal} />
                    <ModalForm
                        urlArray={urlArray}
                        title={title}
                        setTitle={setTitle}
                        setUrlArray={setUrlArray}
                    />
                    {/* <TextInput
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
                            <Text style={styles.pictureButtonElement}>
                                Add picture
                            </Text>
                            <FontAwesome
                                style={[
                                    styles.cameraIcon,
                                    styles.pictureButtonElement,
                                ]}
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
                    <TouchableOpacity style={styles.confirmButtonContainer}>
                        <Text style={styles.confirmButtonElement}>Confirm</Text>
                    </TouchableOpacity> */}
                </View>
            </Modal>
            <TouchableOpacity
                style={[styles.basicContainerStyle, styles.buttonContainer]}
                onPress={openModal}
            >
                <FontAwesome style={styles.buttonElement} name="camera" />
                <Text style={styles.buttonElement}>Edit albums</Text>
            </TouchableOpacity>
        </>
    );
};

export default AddAlbumModal;
