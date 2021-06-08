import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

import { AVATAR_URL } from './constants';
import { firebaseConfig } from './config';

Vue.config.productionTip = false;

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage().ref();

export const db = firebaseApp.firestore();

const usersCollection = db.collection('Users');
const questionsCollection = db.collection('Questions');

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} data
 * @returns {String} id
 */
export const addQuestion = question => {
  return questionsCollection.add(question).then(doc => {
    console.log('doc.id: ', doc.id);
    return doc.id;
  });
};

/**
 *
 * @param {string} id
 * @returns data of the question
 */
export const getQuestion = async id => {
  const question = await questionsCollection.doc(id).get();
  return question.exists ? question.data() : null;
};

/**
 *
 * @returns data of all the questions
 */
export const getAllQuestions = async () => {
  const questions = await questionsCollection.get();
  console.log('questions.docs: ', questions.docs);

  return questions.docs;
};

/**
 * @description addUser - used to add a new user to the list
 * @param {Object} userData
 * @returns {String} user_id
 */

export const addUser = async userData => {
  let user = {
    email: userData.email,
    name: userData.name,
    image_url: AVATAR_URL,
    description: '',
    sub_title: userData.name,
    user_id: '',
    followings: [],
    followers: [],
    questions: [],
  };

  let userId = await usersCollection.add(user).then(doc => {
    return doc.id;
  });

  console.log('userId: ', userId);

  localStorage.removeItem('user_id');
  localStorage.setItem('user_id', userId);
};

/**
 *
 * @param {string} id
 * @returns data of the user
 */
export const getUserData = async id => {
  const user = await (await usersCollection.doc(id).get()).data();
  return user
    ? {
        name: user.name,
        description: user.description,
        sub_title: user.sub_title,
        image: user.image_url,
      }
    : null;
};

/**
 * @param {string} id
 * @returns followings ids
 */
export const getFollowings = async id => {
  const user = await (await usersCollection.doc(id).get()).data();
  return user
    ? {
        followings: user.followings,
      }
    : null;
};

/**
 * @param {string} id
 * @returns followers ids
 */
export const getFollowers = async id => {
  const user = await (await usersCollection.doc(id).get()).data();
  return user
    ? {
        followers: user.followers,
      }
    : null;
};

/**
 * @param {string} id
 * @returns questions of the user
 */
export const getUserQuestions = async id => {
  const user = await (await usersCollection.doc(id).get()).data();
  return user
    ? {
        questions: user.questions,
      }
    : null;
};

/**
 * @param {string} userId
 * @param {object} image
 * @returns {string} image url
 */
export const updateImage = async (userId, image) => {
  return (await storage.child(userId).put(image)).ref.getDownloadURL();
};

/**
 * @description updateUserData - used to update a user data
 * @param {Object} userData
 * @returns {String} user_id
 */
export const updateUserData = userData => {
  return usersCollection.doc(userData.user_id).update(userData);
};

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
