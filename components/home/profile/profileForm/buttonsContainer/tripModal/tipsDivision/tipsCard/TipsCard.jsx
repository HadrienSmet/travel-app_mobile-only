import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./tipsCard.style";

const TipsCard = ({ tips }) => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const openMap = () => setIsMapOpen(true);
    const closeMap = () => setIsMapOpen(false);

    useEffect(() => {
        console.log(tips);
    }, []);

    return (
        <View>
            <Text>{tips.tipsType}</Text>
            <Text>{tips.tipsContent}</Text>
            {tips.tipsLocation.latitude !== undefined && (
                <>
                    <Modal visible={isMapOpen}>
                        <View>
                            <TouchableOpacity
                                style={styles.mapClosingButtonContainer}
                                onPress={closeMap}
                            >
                                <FontAwesome
                                    style={styles.mapClosingButtonContent}
                                    name="times"
                                />
                            </TouchableOpacity>
                            <MapView
                                style={styles.mapContainer}
                                initialRegion={{
                                    latitude: tips.tipsLocation.latitude,
                                    longitude: tips.tipsLocation.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker coordinate={tips.tipsLocation} />
                            </MapView>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={openMap}>
                        <Text>See on the map</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};
export default TipsCard;
