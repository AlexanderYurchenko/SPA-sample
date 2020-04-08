import { LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from "../constants/action-types";

export const signIn = (credentials, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: LOGIN_SUCCESS });
      history.push('/');
    }).catch((error) => {
      dispatch({ type: LOGIN_ERROR, error })
    })
  }
}

export const signOut = (history) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: SIGNOUT_SUCCESS});
      history.push('/');
    });
  }
}