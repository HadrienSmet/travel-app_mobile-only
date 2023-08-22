import { COLORS } from "../../../../../../../../constants";
import TripEventForm from "../tripEventForm/TripEventForm";
import TripTipsForm from "../tripTipsForm/TripTipsForm";

const MarkerFormsContainer = ({
    mapState,
    arrivalLocation,
    stopoverLocation,
    departureLocation,
    adviceLocation,
    warningLocation,
    handleTripSteps,
    handleTripTips,
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
            {mapState === "advice" && (
                <TripTipsForm
                    formBackground="green"
                    tipsLocation={adviceLocation[adviceLocation.length - 1]}
                    tipsType={mapState}
                    pushTips={handleTripTips}
                />
            )}
            {mapState === "warning" && (
                <TripTipsForm
                    formBackground="red"
                    tipsLocation={warningLocation[warningLocation.length - 1]}
                    tipsType={mapState}
                    pushTips={handleTripTips}
                />
            )}
        </>
    );
};

export default MarkerFormsContainer;
