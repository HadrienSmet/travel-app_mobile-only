export const project = {
    ios: {},
    android: {},
};
module.exports = {
    dependencies: {
        // Help rn-cli find and autolink this library
        "@react-native-community/datetimepicker": {
            root: __dirname,
            platforms: {
                android: {
                    componentDescriptors: null,
                },
            },
        },
    },
    ...(project ? { project } : undefined),
};
// export const assets = ["./assets/fonts/"];
