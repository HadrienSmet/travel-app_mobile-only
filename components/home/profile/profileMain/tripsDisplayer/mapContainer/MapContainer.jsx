import { GOOGLE_API_KEY } from "@env";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { useDirections } from "../../../../../../hooks/useDirections";

import MapView from "react-native-maps";
import MapPin from "../../../../../common/mapPin/MapPin";
import MapViewDirections from "react-native-maps-directions";

import styles from "./mapContainer.style";
import DraggableMapPin from "../../../../../common/draggableMapPin/DraggableMapPin";

const { width, height } = Dimensions.get("window");

const aspectRatio = width / height;
const latDelta = 0.04;
const longDelta = latDelta * aspectRatio;

const useMapContainer = () => {
    const { previousTrips } = useSelector(
        (state) => state.userDataReducer.userData
    );
    const [tripsDirections, setTripsDirections] = useState([]);

    useEffect(() => {
        const hadnleDirections = () => {
            let directionsArray = [];
            for (let i = 0; i < previousTrips.length; i++) {
                const { steps, color } = previousTrips[i];
                const { origin, destination, waypoints } = useDirections(steps);
                const data = { origin, destination, waypoints, color };
                directionsArray.push(data);
            }
            setTripsDirections(directionsArray);
        };
        hadnleDirections();
    }, [previousTrips]);

    return { previousTrips, tripsDirections };
};

const MapContainer = ({ isEditing, setSelectedMarker, setNewLocation }) => {
    const { previousTrips, tripsDirections } = useMapContainer();

    return (
        <MapView
            initialRegion={{
                ...previousTrips[0].steps[0].location,
                latitudeDelta: latDelta,
                longitudeDelta: longDelta,
            }}
            style={styles.mapContainer}
        >
            {!isEditing &&
                previousTrips.map((trip, index) =>
                    trip.steps.map((step, i) => (
                        <MapPin
                            key={`trip-${index}__marker-${i}`}
                            marker={step}
                            setSelectedMarker={() =>
                                setSelectedMarker({ trip, step })
                            }
                            color={trip.color}
                        />
                    ))
                )}
            {isEditing &&
                previousTrips.map((trip, index) =>
                    trip.steps.map((step, i) => (
                        <DraggableMapPin
                            key={`trip-${index}__marker-${i}`}
                            marker={step}
                            setSelectedMarker={() =>
                                setSelectedMarker({ trip, step })
                            }
                            setNewLocation={setNewLocation}
                            color={trip.color}
                        />
                    ))
                )}
            {tripsDirections.map((directions, index) => (
                <MapViewDirections
                    key={`direction-${index}`}
                    origin={directions.origin}
                    destination={directions.destination}
                    waypoints={directions.waypoints}
                    apikey={GOOGLE_API_KEY}
                    strokeWidth={4}
                    strokeColor={directions.color}
                />
            ))}
        </MapView>
    );
};

export default MapContainer;
