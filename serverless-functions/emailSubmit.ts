import { APIGatewayProxyCallback, APIGatewayProxyEvent } from "aws-lambda";
import dotenv from "dotenv";
import { sendEmail } from "../src/email";
dotenv.config();

exports.handler = function(
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) {
  const content = JSON.parse(event.body);
  sendEmail(content as any)
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: "",
      });
    })
    .catch((ex) => callback(ex));
};
