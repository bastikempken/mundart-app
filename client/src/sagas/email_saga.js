import { call, takeEvery } from "redux-saga/effects";
import { EMAIL_REQUEST } from "../reducers/action-types";
import axios from "axios";

function* emailSaga(action) {
  try {
    yield call(axios.post, "/emailSubmit", action.payload);
  } catch (e) {
    console.error("Could not send Email", e);
  }
}

export default function* configSaga() {
  yield takeEvery(EMAIL_REQUEST, emailSaga);
}
