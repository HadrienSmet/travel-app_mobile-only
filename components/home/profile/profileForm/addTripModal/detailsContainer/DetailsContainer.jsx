import { useState } from "react";
import { View } from "react-native";
import styles from "./detailsContainer.style";
import DetailsHeader from "./detailsHeader/DetailsHeader";
import DetailsContent from "./detailsContent/DetailsContent";

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
