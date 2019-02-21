import * as firebase from 'firebase/app'

import 'firebase/firestore'

import SagaFirebase from 'redux-saga-firebase'

const config = {
  apiKey: 'AIzaSyA0UeQBKttIQTv5udbk2i6MPQbSXsyS81M',
  authDomain: 'jwcxi-registration.firebaseapp.com',
  databaseURL: 'https://jwcxi-registration.firebaseio.com',
  projectId: 'jwcxi-registration',
  storageBucket: 'jwcxi-registration.appspot.com',
  messagingSenderId: '531875178203'
}


export const app = firebase.initializeApp(config)

if (typeof window !== 'undefined') {
  window.firebase = app
}

export default new SagaFirebase(app)
