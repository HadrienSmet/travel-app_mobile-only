import { View } from "react-native";
import DetailsHeader from "./detailsHeader/DetailsHeader";
import DetailsContent from "./detailsContent/DetailsContent";
import styles from "./detailsContainer.style";

const DetailsContainer = ({
    areDetailsVisible,
    toggleDetails,
    isPopupVisible,
    handleClose,
}) => {
    return (
        <>
            {!isPopupVisible && (
                <View
                    style={[
                        styles.detailsContainer,
                        areDetailsVisible && styles.detailsMaxHeight,
                    ]}
                >
                    <DetailsHeader
                        areDetailsVisible={areDetailsVisible}
                        toggleDetails={toggleDetails}
                    />
                    <DetailsContent
                        areDetailsVisible={areDetailsVisible}
                        handleClose={handleClose}
                    />
                </View>
            )}
        </>
    );
};

export default DetailsContainer;
