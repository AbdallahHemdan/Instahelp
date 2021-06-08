import Vue from 'vue';
import App from './App.vue';
import router from './router';

import firebase from 'firebase';

import { firebaseConfig } from './config';

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
