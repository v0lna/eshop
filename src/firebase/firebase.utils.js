import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUuPO7-XqowUGX7M4Gj0IOegcnNWfzIko",
  authDomain: "crwn-eshop-db.firebaseapp.com",
  databaseURL: "https://crwn-eshop-db.firebaseio.com",
  projectId: "crwn-eshop-db",
  storageBucket: "crwn-eshop-db.appspot.com",
  messagingSenderId: "334581056902",
  appId: "1:334581056902:web:923c5b52494b99f4f19807",
  measurementId: "G-MSJ3W0R1PY",
};

firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("", e.message);
    }
  }
  return userRef;
};

// Initialize Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    // console.log(newDocRef);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) => {
  const res = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return res.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
