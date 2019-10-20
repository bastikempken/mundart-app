const config = require("./configWrapper");
const requestSync = require("sync-request");
const facebookparser = require("./facebookparser");

const callFacebookGraph = () => {
  const fbGraphUrl = "https://graph.facebook.com/logopaediekraehahn/posts";
  const accessToken = config.fbToken;
  const fbResponse = requestSync(
    "GET",
    `${fbGraphUrl}?access_token=${accessToken}`
  );
  const json = JSON.parse(fbResponse.getBody("utf8"));
  return facebookparser.parseFbPosts(json);
};

const buildSuccessResponse = (res, posts) => {
  const header = {
    header: {
      "Content-Type": "application/json"
    }
  };
  res.writeHead(200, header);
  res.write(posts);
};

module.exports.handleRequest = async res => {
  try {
    const posts = callFacebookGraph();
    return buildSuccessResponse(res, posts);
  } catch (error) {
    res.write(400);
  }
};
