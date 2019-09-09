import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDSApL882DbBHve8-SK6dGvMniRea8ecPY',
  authDomain: 'etronee-db.firebaseapp.com',
  databaseURL: 'https://etronee-db.firebaseio.com',
  projectId: 'etronee-db',
  storageBucket: '',
  messagingSenderId: '678665466662',
  appId: '1:678665466662:web:b0c03040059a2c19bd87e7'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
