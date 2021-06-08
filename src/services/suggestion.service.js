import { firebaseApp } from './../main'

const db = firebaseApp.firestore();

const usersCollection = db.collection('Users');

const getSuggestions = (myId, numUsersToGet) => {
  const user = await(await usersCollection.doc(myId).get()).data();
  const followings = user["followings"];
  
  return await(
    usersCollection
      .where("user_id", "not-in", followings)
      .limit(numUsersToGet)
  ).data();
};

export {
  getSuggestions,
}