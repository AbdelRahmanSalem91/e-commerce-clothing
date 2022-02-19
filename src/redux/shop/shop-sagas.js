import { takeEvery, call,put } from "redux-saga/effects";
import { ShopActionTypes } from "./shop-types";
import { collection, getDocs } from "firebase/firestore";
import {
  fetchCollectionsSuccess,
  fetchCollectionFailure,
} from "./shop-actions";
import { convertCollectionsSnapshotToMap, db } from "../../firebase/Firebase.util";

export function* fetchCollectionsAsync() {
  try{
    const collectionRef = collection(db, "collections");
    const snapshot = yield getDocs(collectionRef)
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch(error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
