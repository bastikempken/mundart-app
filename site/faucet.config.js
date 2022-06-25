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
    sass: [{
        source: "./src/sass/index.scss",
        target: "./dist/assets/css/app-bundle.css"
    }],
    static: [
        {
            source: "./assets/",
            target: "./dist/assets/"
        },
        {
            source: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
            target: "./dist/assets/bootstrap/bootstrap.min.css"
        },
        {
            source: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
            target: "./dist/assets/bootstrap/bootstrap.min.js"
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