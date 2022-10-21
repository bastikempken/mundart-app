// require the module as normal
const bs = require("browser-sync").create();
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware(['/.netlify/functions/emailSubmit', '/fbposts'], { target: 'http://localhost:9000' });

bs.init({
    port: 8080,
    watch: true,
    ui: {
        port: 9090,
    },
    open: false,
    cors: true,
    server: {
        baseDir: "dist",
        serveStaticOptions: {
            extensions: ["html"]
        },
    },
    middleware: [proxy]
});

console.log('init')

bs.reload("*.html");