import { takeEvery, call, put } from "redux-saga/effects";
import {
  LOAD_FB,
  LOAD_FB_SUCCESS,
  LOAD_FB_ERROR
} from "../reducers/action-types";
import axios from "axios";

const fbPostSuccess = payload => ({ type: LOAD_FB_SUCCESS, payload });

function* facebookSaga(action) {
  try {
    console.log("FBSAGA");
    const payload = yield call(axios.get, "/fbposts");
    yield put(fbPostSuccess(payload.data.posts));
  } catch (e) {
    yield put({ type: LOAD_FB_ERROR });
  }
}

export default function* configSaga() {
  yield takeEvery(LOAD_FB, facebookSaga);
}
