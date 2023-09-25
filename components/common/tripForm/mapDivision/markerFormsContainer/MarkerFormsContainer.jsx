import { COLORS } from "../../../../../constants";
import TripEventForm from "../tripEventForm/TripEventForm";

const MarkerFormsContainer = ({
    mapState,
    arrivalLocation,
    stopoverLocation,
    departureLocation,
    handleTripSteps,
}) => {
    return (
        <>
            {mapState === "arrival" && (
                <TripEventForm
                    eventLocation={arrivalLocation}
                    eventType={mapState}
                    formBackground={COLORS.primary}
                    pushTripStep={handleTripSteps}
                />
            )}
            {mapState === "stopover" && (
                <TripEventForm
                    eventLocation={
                        stopoverLocation[stopoverLocation.length - 1]
                    }
                    eventType={mapState}
                    formBackground={COLORS.secondary}
                    pushTripStep={handleTripSteps}
                />
            )}
            {mapState === "departure" && (
                <TripEventForm
                    eventLocation={departureLocation}
                    eventType={mapState}
                    formBackground={COLORS.tertiary}
                    pushTripStep={handleTripSteps}
                />
            )}
        </>
    );
};

export default MarkerFormsContainer;
