const sites = ["index",
    "tiergestuetzte-therapie",
    "team",
    "anfahrt",
    "kontakt",
    "neuigkeiten",
    "impressum",
    "cookie-einstellungen",
    "datenschutz"
];

module.exports = {
    watchDirs: ["./src"],
    nunjucks: sites.map(site => ({
        source: `./src/${site}.njk`,
        target: `./dist/${site}.html`,
        markdown: true
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

    plugins: {
        nunjucks: {
            key: "nunjucks",
            plugin: "faucet-pipeline-nunjucks",
            bucket: "static"
        }
    },

}