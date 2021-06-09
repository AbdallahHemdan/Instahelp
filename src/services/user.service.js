import firebase from 'firebase';
import { firebaseApp } from './../main';
import { AVATAR_URL } from './../constants';

const storage = firebaseApp.storage().ref();

export const db = firebaseApp.firestore();

const usersCollection = db.collection('Users');

/**
 * @description addUser - used to add a new user to the list
 * @param {Object} userData
 * @returns {String} user_id
 */
const addUser = async userData => {
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
    usersCollection.doc(doc.id).update({
      user_id: doc.id,
    });
    return doc.id;
  });

  localStorage.removeItem('user_id');
  localStorage.removeItem('user_image');
  localStorage.removeItem('displayName');
  localStorage.removeItem('user_subtitle');
  localStorage.removeItem('user_description');

  localStorage.setItem('user_id', userId);

  await getUserData(userId).then(res => {
    localStorage.setItem('user_image', res.image);
    localStorage.setItem('user_subtitle', res.sub_title);
    localStorage.setItem('user_description', res.description);
  });

  return userId;
};

/**
 * @description followUser
 * @param {Object} userId, followingId
 */
const followUser = (userId, followingId) => {
  let userRef = usersCollection.doc(userId);
  userRef.update({
    followings: firebase.firestore.FieldValue.arrayUnion(followingId),
  });

  let followingRef = usersCollection.doc(followingId);
  followingRef.update({
    followers: firebase.firestore.FieldValue.arrayUnion(userId),
  });
};

/**
 * @description unfollowUser
 * @param {Object} userId, followingId
 */
const unfollowUser = (userId, followingId) => {
  let userRef = usersCollection.doc(userId);
  userRef.update({
    followings: firebase.firestore.FieldValue.arrayRemove(followingId),
  });

  let followingRef = usersCollection.doc(followingId);
  followingRef.update({
    followers: firebase.firestore.FieldValue.arrayRemove(userId),
  });
};

/**
 *
 * @param {string} id
 * @returns data of the user
 */
const getUserData = async id => {
  const user = await (await usersCollection.doc(id).get()).data();
  return user
    ? {
        user_id: user.user_id,
        name: user.name,
        description: user.description,
        sub_title: user.sub_title,
        image: user.image_url,
      }
    : null;
};

/**
 *
 * @param {string} email
 * @returns data of the user
 */
const getUserByEmail = async email => {
  const user = await usersCollection.where('email', '==', email).get();

  let userInfo = null;
  if (user.docs.length) {
    userInfo = user.docs[0].data();
  }

  return userInfo;
};

/**
 * @param {string} id
 * @returns followings ids
 */
const getFollowings = async id => {
  const user = await (await usersCollection.doc(id).get()).data();
  return user ? user.data() : null;
};

/**
 * @param {string} id
 * @returns followers ids
 */
const getFollowers = async id => {
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
const getUserQuestions = async id => {
  const questionsCollection = db.collection('Questions');
  const questions = await questionsCollection.where('user_id', '==', id).get();
  let questionsData = [];
  questions.forEach(doc => {
    questionsData.push(doc.data());
  });
  return questionsData;
};
/**
 * @param {string} userId
 * @param {object} image
 * @returns {string} image url
 */
const updateImage = async (userId, image) => {
  return (await storage.child(userId).put(image)).ref.getDownloadURL().then(url => {
    console.log(url);
    usersCollection.doc(userId).update({
      image_url: url,
    });
    return url;
  });
};

/**
 * @description updateUserData - used to update a user data
 * @param {Object} userData
 * @returns {String} user_id
 */
const updateUserData = userData => {
  return usersCollection.doc(userData.user_id).update(userData);
};

export {
  addUser,
  followUser,
  getUserData,
  updateImage,
  unfollowUser,
  getFollowers,
  getFollowings,
  getUserByEmail,
  updateUserData,
  getUserQuestions,
};
