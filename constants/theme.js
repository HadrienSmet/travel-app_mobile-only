const COLORS = {
    primary: "#00A7EF",
    secondary: "#FF7A00",
    tertiary: "#FF00A8",

    refusal: "#E20A0A",
    approval: "#6BBF44",

    gray: "rgba(0,0,0,0.5)",
    gray2: "#C1C0C8",

    black: "rgb(0,0,0)",
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
};

const FONT = {
    title: "Cookie_400Regular",
    regular: "Inter_400Regular",
    bold: "Inter_700Bold",
    black: "Inter_900Black",
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const SHADES = {
    white04: "rgba(255,255,255,0.4)",

    black02: "rgba(0,0,0,0.2)",
    black04: "rgba(0,0,0,0.4)",
    black07: "rgba(0,0,0,0.7)",

    orange04: "rgba(122,59,0,0.4)",
    orange055: "rgba(122,59,0,0.55)",
    orange065: "rgba(122,59,0,0.65)",

    pink04: "rgba(255, 0, 168, 0.4)",
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { COLORS, FONT, SIZES, SHADES, SHADOWS };
