import { all, call } from "redux-saga/effects";
import { fetchSopDataSaga } from "./shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchSopDataSaga)]);
}
