import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "@env";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import MapPin from "../../../../../common/mapPin/MapPin";
import styles from "./mapContainer.style";

const useMapContainer = () => {
    const tripData = useSelector((state) => state.tripDataReducer.tripData);
    const [selectedMarker, setSelectedMarker] = useState("");
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        const handleDirections = () => {
            if (tripData.steps.length > 1) {
                const array = [];
                for (let i = 0; i < tripData.steps.length - 1; i++) {
                    const currentDirection = {
                        origin: tripData.steps[i].location,
                        destination: tripData.steps[i + 1].location,
                    };
                    array.push(currentDirection);
                }
                setDirections(array);
            }
        };
        handleDirections();
    }, [tripData.steps]);
    useEffect(() => {
        console.log("directions: ");
        console.log(directions);
    }, [directions]);

    return {
        directions,
        tripData,
        setSelectedMarker,
    };
};

const MapContainer = ({ handleLongPress }) => {
    const { directions, tripData, setSelectedMarker } = useMapContainer();

    return (
        <MapView onLongPress={handleLongPress} style={styles.mapContainer}>
            {tripData.steps.length !== 0 &&
                tripData.steps.map((step, index) => (
                    <MapPin
                        key={`marker-${index}`}
                        marker={step}
                        color={tripData.color}
                        setSelectedMarker={setSelectedMarker}
                    />
                ))}
            {directions.length !== 0 &&
                directions.map((direction, index) => (
                    <MapViewDirections
                        key={`direction_${index}`}
                        origin={direction.origin}
                        destination={direction.destination}
                        apikey={GOOGLE_API_KEY}
                    />
                ))}
        </MapView>
    );
};

export default MapContainer;
