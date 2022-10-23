import {APIGatewayProxyCallback, APIGatewayProxyEvent} from "aws-lambda";
import dotenv from "dotenv";
import {sendEmail} from "../src/email";

dotenv.config();

exports.handler = function (
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) {
    const content = event.body.split('&').reduce((acc, v) => {
        let x = v.split("=")
        const key = x[0]
        const value = decodeURIComponent(x[1])
        acc[key] = value
        return acc

    }, {})
    sendEmail(content as any)
        .then(() => {
            callback(null, {
                statusCode: 200,
                body: "",
            });
        })
        .catch((ex) => callback(ex));
};
