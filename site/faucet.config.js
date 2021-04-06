const sites = ["tiergestuetze-therapie", "team"];

module.exports = {
    nunjucks: sites.map(site => ({
        source: `./src/${site}.njk`,
        target: `./dist/${site}.html`
    })),
    watchDirs: ["./src"],
    plugins: {
        nunjucks: {
            key: "nunjucks",
            plugin: "faucet-pipeline-nunjucks",
            bucket: "static"
        }
    }
}