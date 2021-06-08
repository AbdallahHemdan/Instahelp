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
            user_id: doc.id
        })
        return doc.id;
    });

    localStorage.removeItem('user_id');
    localStorage.removeItem('user_image');
    localStorage.removeItem('displayName');
    localStorage.removeItem('user_subtitle');
    localStorage.removeItem('user_description');
    localStorage.setItem('user_id', userId);
};

/**
 *
 * @param {string} id
 * @returns data of the user
 */
const getUserData = async id => {
    const user = await (await usersCollection.doc(id).get()).data();
    return user ? {
            name: user.name,
            description: user.description,
            sub_title: user.sub_title,
            image: user.image_url,
        } :
        null;
};

/**
 * @param {string} id
 * @returns followings ids
 */
const getFollowings = async id => {
    const user = await (await usersCollection.doc(id).get()).data();
    return user ? {
            followings: user.followings,
        } :
        null;
};

/**
 * @param {string} id
 * @returns followers ids
 */
const getFollowers = async id => {
    const user = await (await usersCollection.doc(id).get()).data();
    return user ? {
            followers: user.followers,
        } :
        null;
};

/**
 * @param {string} id
 * @returns questions of the user
 */
const getUserQuestions = async id => {
    const user = await (await usersCollection.doc(id).get()).data();
    return user ? {
            questions: user.questions,
        } :
        null;
};

/**
 * @param {string} userId
 * @param {object} image
 * @returns {string} image url
 */
const updateImage = async(userId, image) => {
    return (await storage.child(userId).put(image)).ref.getDownloadURL();
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
    getUserData,
    getFollowings,
    getFollowers,
    getUserQuestions,
    updateImage,
    updateUserData,
};