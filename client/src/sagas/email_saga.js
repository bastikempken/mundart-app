import axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import { apiBuilder } from "../functions-preafix";
import { EMAIL_REQUEST } from "../reducers/action-types";

function* emailSaga(action) {
  try {
    yield call(axios.post, apiBuilder("emailSubmit"), action.payload);
  } catch (e) {
    console.error("Could not send Email", e);
  }
}

export default function* configSaga() {
  yield takeEvery(EMAIL_REQUEST, emailSaga);
}
