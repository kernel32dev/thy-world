module.exports = {
    presets: [
        [ "@babel/preset-env", { modules: false } ],
        [ "@babel/preset-typescript", { isTSX: true, allExtensions: true, dts: true } ],
    ],
    plugins: [
        "@babel/plugin-transform-class-properties",
        "@babel/plugin-transform-object-rest-spread",
        [
            "@babel/plugin-transform-react-jsx",
            { runtime: "automatic" }
        ],
    ],
};
