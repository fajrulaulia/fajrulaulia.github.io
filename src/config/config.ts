// firebase.ts
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import cfg from './firebase-config.json';

if (!firebase.apps.length) {
  firebase.initializeApp(cfg);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();