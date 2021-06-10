import firebase from 'firebase';

export function updateAuthState() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      localStorage.setItem('accessToken', user.uid);
    } else {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('displayName');
    }
  });
}
