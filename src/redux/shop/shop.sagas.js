import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  // fetchCollectionStart,
} from "./shop.actions";
import ShopActionType from "./shop.types";

function* fetchShopData() {
  try {
    // yield put(fetchCollectionStart);
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchSopDataSaga() {
  yield takeLatest(ShopActionType.START_FETCHING, fetchShopData);
}
