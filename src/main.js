import Vue from 'vue'
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
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
const questionsCollection = db.collection('Questions')

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} data
 * @returns {String} id
 */
export const addQuestion = question => {
  let id = questionsCollection.add(question).then(doc => {
    console.log('doc.id: ', doc.id)
    return doc.id
  })

  return id
}

/**
 *
 * @param {string} id
 * @returns data of the question
 */
export const getQuestion = async id => {
  const question = await questionsCollection.doc(id).get()
  let questionData = question.exists ? question.data() : null

  return questionData
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
