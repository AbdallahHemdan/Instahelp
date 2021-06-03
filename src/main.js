import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyB586VuDIIUbo5PPV7txZeGCLnV8jC_h4o',
  authDomain: 'instahelp-482a0.firebaseapp.com',
  projectId: 'instahelp-482a0',
  storageBucket: 'instahelp-482a0.appspot.com',
  messagingSenderId: '666106337917',
  appId: '1:666106337917:web:4a58d47bd8d596d5b1af14',
  measurementId: 'G-S77KTGH0NG',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
