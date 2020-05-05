import { takeLatest, put, all, call } from "redux-saga/effects";

import API from "../../api/baseURL";

import {
  auth,
  googleProvider,
  createUserProfileDocumnet,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  registerFailure,
  registerSuccess,
  recoverPasswordSuccess,
  recoverPasswordFailure,
  cleanUp,
} from "./user.action";

import userTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth, additonalData) {
  try {
    const userRef = yield call(
      createUserProfileDocumnet,
      userAuth,
      additonalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

// GOOGLE LOGIN
export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    //let token = yield auth.currentUser.getIdToken(/* forceRefresh */ true);

    // yield API.post("insert", {
    //   uid: uid,
    //   email: email,
    //   password: null,
    //   fullname: displayName,
    //   address: null,
    //   phone: user.phoneNumber
    // });

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

// SIGN OUT
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(cleanUp());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

/* SIGN UP */
export function* register({
  payload: { email, password, displayName, phone },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield API.post("insert", {
      fullname: displayName,
      pass: password,
      email: email,
      address: null,
      phone: phone,
      role: 0,
    });
    yield auth.onAuthStateChanged(function (user) {
      if (user) {
        user.updateProfile({
          displayName: displayName,
          phoneNumber: phone,
        });
      }
    });
    yield put(
      registerSuccess({
        user,
        additonalData: { displayName, phoneNumber: phone },
      })
    );
  } catch (err) {
    yield put(registerFailure(err));
  }
}

export function* onRegister() {
  yield takeLatest(userTypes.REGISTER_EMAIL_START, register);
}

/* SIGN IN */
export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    // let token = yield auth.currentUser.getIdToken(/* forceRefresh */ true);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onSignInWithEmail() {
  yield takeLatest(userTypes.SIGN_IN_WITH_EMAIL, signIn);
}

/* SIGN IN AFTER SIGN UP */
export function* signInAfterSignUp({ payload: { user, additonalData } }) {
  yield getSnapshotFromUserAuth(user, additonalData);
}

export function* onSignInaAfterSignUp() {
  yield takeLatest(userTypes.REGISTER_EMAIL_SUCCESS, signInAfterSignUp);
}

/* RESET PASSWORD  */
// http://midway-travel.com/server/public/api/userUpdate/23
export function* recoverPassword({ payload }) {
  try {
    yield auth.sendPasswordResetEmail(payload);
    yield put(recoverPasswordSuccess());
  } catch (err) {
    yield put(recoverPasswordFailure(err));
  }
}

export function* onRecoverPassword() {
  yield takeLatest(userTypes.RECOVER_PASSOWRD_START, recoverPassword);
}

// CHECK USER SESSION
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// CALL ALL SAGAS
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignOutStart),
    call(onSignInaAfterSignUp),
    call(onRegister),
    call(onSignInWithEmail),
    call(onRecoverPassword),
    call(onCheckUserSession),
  ]);
}
