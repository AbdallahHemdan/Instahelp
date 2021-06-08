import { firebaseApp } from './../main';

import { addCommentToQuestion } from './question.service';

const db = firebaseApp.firestore();

const commentsCollection = db.collection('Comments');

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} commentData
 * @returns {String} id
 */
const addComment = comment => {
  let commentData = {
    user_id: comment.user_id,
    content: comment.content,
    question_id: comment.question_id,
    username: comment.username,
  };

  return commentsCollection.add(commentData).then(doc => {
    console.log('doc.id: ', doc.id);
    addCommentToQuestion(commentData.question_id, doc.id);
    return doc.id;
  });
};

/**
 * @description getComments - used to get all comments of a question
 * @param {Object} questionId
 * @returns {array} comments
 */
const getComments = async questionId => {
  if (!questionId)
    return new Promise(
      () => {
        console.log('accepted');
      },
      () => {
        console.log('error');
      },
    );

  const comments = await commentsCollection.where('question_id', '==', questionId).get();

  let commentsData = [];
  comments.forEach(comment => {
    commentsData.push(comment.data());
  });

  return commentsData;
};

export { addComment, getComments };
