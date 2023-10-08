export const useDirections = (markersList) => {
    const origin = markersList[0].location;
    const destination = markersList[markersList.length - 1].location;

    const handleWaypoints = () => {
        const waypointsPortion = markersList.slice(1, markersList.length - 1);
        const data = [];
        for (const { location } of waypointsPortion) {
            data.push(location);
        }
        return data;
    };
    const waypoints = markersList.length > 2 ? handleWaypoints() : [];

    return { origin, destination, waypoints };
};
