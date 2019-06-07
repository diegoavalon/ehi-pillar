module.exports = {
    source: "./src",
    destination: "./esdoc",
    index: "./index.md",
    excludes: ["utils"],
    plugins: [
        {
            name: "esdoc-ecmascript-proposal-plugin",
            option: { all: true }
        }
    ]
};
