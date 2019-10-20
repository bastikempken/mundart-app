import { all } from "redux-saga/effects";
import facebookSaga from "./facebook_saga";
import emailSaga from "./email_saga";

export default function* rootSaga() {
  yield all([facebookSaga(), emailSaga()]);
}
