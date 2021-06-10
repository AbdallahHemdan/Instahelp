import firebase from 'firebase';

const firebaseConfig = {
  projectId: 'instahelp-482a0',
  measurementId: 'G-S77KTGH0NG',
  messagingSenderId: '666106337917',
  storageBucket: 'instahelp-482a0.appspot.com',
  authDomain: 'instahelp-482a0.firebaseapp.com',
  apiKey: 'AIzaSyB586VuDIIUbo5PPV7txZeGCLnV8jC_h4o',
  appId: '1:666106337917:web:4a58d47bd8d596d5b1af14',
};

export const fb = firebase.initializeApp(firebaseConfig);
