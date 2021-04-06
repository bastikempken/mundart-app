const sites = ["index", "tiergestuetze-therapie", "team"];

module.exports = {
    nunjucks: sites.map(site => ({
        source: `./src/${site}.njk`,
        target: `./dist/${site}.html`
    })),
    static: [
        {
            source: "./assets/",
            target: "./dist/assets/"
        }
    ],
    js: [
        {
            source: "./src/js/index.js",
            target: "./dist/assets/app-bundle.js"
        }
    ],
    watchDirs: ["./src"],
    plugins: {
        nunjucks: {
            key: "nunjucks",
            plugin: "faucet-pipeline-nunjucks",
            bucket: "static"
        }
    }
}