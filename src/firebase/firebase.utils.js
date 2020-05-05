import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyAz36rKFVc5pfCU9q47HcEzvxNeesN5Z_w",
  authDomain: "midway-travel.firebaseapp.com",
  databaseURL: "https://midway-travel.firebaseio.com",
  projectId: "midway-travel",
  storageBucket: "midway-travel.appspot.com",
  messagingSenderId: "924729430845",
  appId: "1:924729430845:web:a6100cc7c9dbaa206deb54",
  measurementId: "G-E90DEG2TT3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocumnet = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        phoneNumber,
        createdAt,
        ...additonalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export default firebase;
