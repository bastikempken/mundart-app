import { APIGatewayProxyCallback, APIGatewayProxyEvent } from "aws-lambda";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

exports.handler = function(
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) {
  const fbGraphUrl = "https://graph.facebook.com/logopaediekraehahn/posts";
  axios
    .get(`${fbGraphUrl}?access_token=${process.env.fb_token}`)
    .then((result) => {
      const response = result.data;
      const mappingResult = response.data.map((rawJsonEntry) => ({
        id: rawJsonEntry.id.split("_")[1],
        timestamp: new Date(rawJsonEntry.created_time),
      }));
      callback(null, {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: JSON.stringify({ posts: mappingResult }),
      });
    })
    .catch((ex) => callback(ex));
};
