import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { IOScrollView, InView } from "react-native-intersection-observer";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const myRank = 16;

const MyCard = ({ rank, setIsMyRankVisible }) => {
    return (
        <InView
            style={cardStyles.myCard}
            onChange={(isVisible) => setIsMyRankVisible(isVisible)}
        >
            <Text>My rank is {rank}</Text>
        </InView>
    );
};
const Card = ({ rank }) => {
    return (
        <View style={cardStyles.card}>
            <Text>Regular Card n°{`${rank}`}</Text>
        </View>
    );
};
const MyRankModal = ({ rank, width, bottom }) => {
    return (
        <Animated.View style={[modalStyle.myModal, { width, bottom }]}>
            <Text>My rank is {rank}</Text>
        </Animated.View>
    );
};
const windowWidth = Dimensions.get("window").width;
const width7th = windowWidth * 0.7;

const RankLayout = () => {
    const [ranks, setRanks] = useState([]);
    const [isFill, setIsFill] = useState(false);
    const [isMyRankVisible, setIsMyRankVisible] = useState(false);
    // const opacity = useSharedValue(0);
    const bottom = useSharedValue(-60);
    const width = useSharedValue(0);
    const decreaseSharedValue = (sharedValue, value) =>
        (sharedValue.value = withSpring(sharedValue.value - value));
    const increaseSharedValue = (sharedValue, value) =>
        (sharedValue.value = withSpring(sharedValue.value + value));
    const handleModalAppear = () => {
        // increaseSharedValue(opacity, 1);
        increaseSharedValue(bottom, 80);
        increaseSharedValue(width, width7th);
    };
    const handleModalDisappear = () => {
        // decreaseSharedValue(opacity, 1);
        decreaseSharedValue(bottom, 80);
        decreaseSharedValue(width, width7th);
    };

    useEffect(() => {
        if (!isFill) {
            const fillRanks = () => {
                const array = [];
                for (let i = 0; i < 26; i++) {
                    array.push(i);
                }
                setRanks(array);
            };
            fillRanks();
            setIsFill(true);
        }
    }, []);
    useEffect(() => {
        if (isMyRankVisible) {
            handleModalDisappear();
        } else {
            handleModalAppear();
        }
    }, [isMyRankVisible]);
    return (
        <SafeAreaView style={styles.container}>
            <IOScrollView style={{ width: "75%" }}>
                <Text style={{ textAlign: "center", marginBottom: 4 }}>
                    Ranks
                </Text>
                {ranks.map((rank) =>
                    rank === myRank ? (
                        <MyCard
                            setIsMyRankVisible={setIsMyRankVisible}
                            key={rank}
                            rank={rank}
                        />
                    ) : (
                        <Card key={rank} rank={rank} />
                    )
                )}
            </IOScrollView>
            {!isMyRankVisible && (
                <MyRankModal
                    width={width}
                    // opacity={opacity}
                    bottom={bottom}
                    rank={myRank}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
const cardStyles = StyleSheet.create({
    card: {
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: "rgb(10, 10, 10)",
        borderRadius: 4,
        width: "100%",
        paddingVertical: 24,
        marginBottom: 4,
    },
    myCard: {
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: "rgb(10, 150, 210)",
        backgroundColor: "rgba(10, 150, 210, 0.3)",
        borderRadius: 4,
        width: "100%",
        paddingVertical: 24,
        marginBottom: 4,
    },
});
const modalStyle = StyleSheet.create({
    myModal: {
        position: "absolute",
        paddingVertical: 8,
        borderRadius: 60,
        alignItems: "center",
        backgroundColor: "rgb(0, 200, 0)",
    },
});

export default RankLayout;
