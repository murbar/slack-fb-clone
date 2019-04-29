import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAnTSW5KSlpTSy4UYib-TUJgYiqNCt1jcY',
  authDomain: 'slack-clone-95417.firebaseapp.com',
  databaseURL: 'https://slack-clone-95417.firebaseio.com',
  projectId: 'slack-clone-95417',
  storageBucket: 'slack-clone-95417.appspot.com',
  messagingSenderId: '831402744205'
};

firebase.initializeApp(config);

export default firebase;
