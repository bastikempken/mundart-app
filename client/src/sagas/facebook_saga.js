import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOAD_FB,
  LOAD_FB_ERROR,
  LOAD_FB_SUCCESS,
} from "../reducers/action-types";

const fbPostSuccess = (payload) => ({ type: LOAD_FB_SUCCESS, payload });

function* facebookSaga(action) {
  try {
    const payload = yield call(axios.get, "/.netlify/functions/fbposts");
    yield put(fbPostSuccess(payload.data.posts));
  } catch (e) {
    yield put({ type: LOAD_FB_ERROR });
  }
}

export default function* configSaga() {
  yield takeEvery(LOAD_FB, facebookSaga);
}
