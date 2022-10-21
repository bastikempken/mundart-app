const sites = ["index",
    "tiergestuetzte-therapie",
    "karriere",
    "praxis",
    "fragen",
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
    images: [{
        source: "./assets",
        target: "./dist/assets/"
    }],
    static: [
        {
            source: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
            target: "./dist/assets/bootstrap/bootstrap.min.css"
        },
        {
            source: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
            target: "./dist/assets/bootstrap/bootstrap.min.js"
        },
        {
            source: "./node_modules/lightbox2/dist/css/lightbox.min.css",
            target: "./dist/assets/lightbox2/lightbox.min.css"
        },
        {
            source: "./node_modules/lightbox2/dist/js/lightbox-plus-jquery.js",
            target: "./dist/assets/lightbox2/lightbox.js"
        },
        {
            source: "./node_modules/lightbox2/dist/images/",
            target: "./dist/assets/images/"
        },
        {
            source: "./node_modules/bootstrap-icons/icons/",
            target: "./dist/assets/bootstrap-icons/"
        },
        {
            source: "./node_modules/bootstrap-icons/icons/",
            target: "./dist/assets/bootstrap-icons/"
        }
    ],
    js: [
        {
            source: "./src/js/index.js",
            target: "./dist/assets/app-bundle.js"
        },
        {
            source: "./src/js/team.js",
            target: "./dist/assets/team.js"
        },
        {
            source: "./src/js/kontakt.js",
            target: "./dist/assets/kontakt.js"
        }
    ],
    plugins: [
        {
            key: "nunjucks",
            plugin: "faucet-pipeline-nunjucks",
            bucket: "static"
        },
        require("faucet-pipeline-images")
    ],
}