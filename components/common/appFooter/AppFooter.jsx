import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS, SHADES } from "../../../constants";
import styles from "./appFooter.style";

const defaultStyle = { color: SHADES.black04 };
const selectedStyle = { color: COLORS.secondary };

const AppFooter = ({ homeState, setHomeState }) => {
    const [matcherIconStyle, setMatcherIconStyle] = useState(defaultStyle);
    const [messagesIconStyle, setMessagesIconStyle] = useState(defaultStyle);
    const [travelIconStyle, setTravelIconStyle] = useState(defaultStyle);
    const [profileIconStyle, setProfileIconStyle] = useState(defaultStyle);

    useEffect(() => {
        setMatcherIconStyle(defaultStyle);
        setMessagesIconStyle(defaultStyle);
        setTravelIconStyle(defaultStyle);
        setProfileIconStyle(defaultStyle);

        switch (homeState) {
            case "matcher":
                setMatcherIconStyle(selectedStyle);
                break;
            case "messages":
                setMessagesIconStyle(selectedStyle);
                break;
            case "explore":
                setTravelIconStyle(selectedStyle);
                break;
            case "profile":
                setProfileIconStyle(selectedStyle);
                break;
        }
    }, [homeState]);

    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerBefore}></View>
            <TouchableOpacity onPress={() => setHomeState("matcher")}>
                <FontAwesome
                    style={[styles.footerElement, matcherIconStyle]}
                    name="users"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHomeState("messages")}>
                <FontAwesome
                    style={[styles.footerElement, messagesIconStyle]}
                    name="comments"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHomeState("explore")}>
                <FontAwesome
                    style={[styles.footerElement, travelIconStyle]}
                    name="compass"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setHomeState("profile")}>
                <FontAwesome
                    style={[styles.footerElement, profileIconStyle]}
                    name="user"
                />
            </TouchableOpacity>
        </View>
    );
};

export default AppFooter;
