import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var fbConfig = {
  apiKey: "AIzaSyAbWG02PM468kI2S6o_gw1sUeYRdkqd-Cw",
  authDomain: "spa-sample-3a315.firebaseapp.com",
  databaseURL: "https://spa-sample-3a315.firebaseio.com",
  projectId: "spa-sample-3a315",
  storageBucket: "spa-sample-3a315.appspot.com",
  messagingSenderId: "290372714716",
  appId: "1:290372714716:web:bba0b22591eee807f2f419"
};

firebase.initializeApp(fbConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase