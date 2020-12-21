const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

(async () => {
  await imagemin(["src/assets/slideshow/*.jpg"], {
    destination: "dist/assets/slideshow",
    plugins: [imageminMozjpeg({ quality: 50 })],
  });
  console.log("compressed <src/assets/slideshow>");

  await imagemin(["src/assets/team/*.jpg"], {
    destination: "dist/assets/team",
    plugins: [imageminMozjpeg({ quality: 20 })],
  });
  console.log("compressed <src/assets/team>");
})();
