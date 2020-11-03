import ShopActionType from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

const fetchCollectionStart = () => ({
  type: ShopActionType.START_FETCHING,
});

const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionType.FETCH_SUCCESS,
  payload: collectionsMap,
});

const fetchCollectionsFailure = (errorMsg) => ({
  type: ShopActionType.FETCH_ERROR,
  payload: errorMsg
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchCollectionStart());

    collectionRef.get()
      .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      })
  };
};
