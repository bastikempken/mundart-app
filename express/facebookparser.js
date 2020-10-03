module.exports.parseFbPosts = function(fbPosts) {
  const posts = fbPosts.data.map(p => convert(p));
  return JSON.stringify({ posts });
};

const convert = rawJsonEntry => ({
  id: rawJsonEntry.id.split("_")[1],
  timestamp: new Date(rawJsonEntry.created_time)
});
