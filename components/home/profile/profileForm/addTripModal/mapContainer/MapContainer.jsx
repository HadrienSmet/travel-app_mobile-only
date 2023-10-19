import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDirections } from "../../../../../../hooks";
import { GOOGLE_API_KEY } from "@env";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapPin from "../../../../../common/mapPin/MapPin";

import styles from "./mapContainer.style";

const useMapContainer = () => {
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    const [directions, setDirections] = useState(undefined);
    useEffect(() => {
        if (tripData.steps.length > 1) {
            const { origin, destination, waypoints } = useDirections(
                tripData.steps
            );
            setDirections({ origin, destination, waypoints });
        }
    }, [tripData.steps]);

    useEffect(() => {
        directions;
    }, [directions]);

    return { directions, tripData };
};

const MapContainer = ({ handleLongPress }) => {
    const { directions, tripData } = useMapContainer();

    return (
        <MapView onLongPress={handleLongPress} style={styles.mapContainer}>
            {tripData.steps.length !== 0 &&
                tripData.steps.map((step, index) => (
                    <MapPin
                        key={`marker-${index}`}
                        marker={step}
                        color={tripData.color}
                        setSelectedMarker={() => {}}
                    />
                ))}
            {directions && (
                <MapViewDirections
                    origin={directions.origin}
                    destination={directions.destination}
                    waypoints={directions.waypoints}
                    apikey={GOOGLE_API_KEY}
                    strokeWidth={4}
                    strokeColor={tripData.color}
                />
            )}
        </MapView>
    );
};

export default MapContainer;
