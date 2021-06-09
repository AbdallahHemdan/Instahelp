import { firebaseApp } from './../main';

const db = firebaseApp.firestore();

const usersCollection = db.collection('Users');

const getSuggestions = async (myId, numUsersToGet) => {
  const user = await (await usersCollection.doc(myId).get()).data();
  let followings = user['followings'];

  let suggestions = [];
  if (followings === null || !followings.length) {
    followings = ['a'];
  }

  await usersCollection
    .where('user_id', 'not-in', followings)
    .limit(numUsersToGet)
    .get()
    .then(res => {
      let docs = res.docs;

      docs.forEach(doc => {
        if (doc.id !== myId) {
          suggestions.push(doc.data());
        }
      });
    });

  return suggestions;
};

export { getSuggestions };
