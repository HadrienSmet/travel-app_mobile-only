const COLORS = {
    primary: "#00A7EF",
    secondary: "#444262",
    tertiary: "#FF7754",

    gray: "rgba(0,0,0,0.5)",
    gray2: "#C1C0C8",

    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
};

const FONT = {
    title: "CookieRegular",
    regular: "InterRegular",
    bold: "InterBold",
    black: "InterBlack",
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
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

export { COLORS, FONT, SIZES, SHADOWS };
