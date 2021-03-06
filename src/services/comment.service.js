import firebase from 'firebase';
import { fb } from '@/plugins/firebase.js';

import { addCommentToQuestion } from './question.service';

const db = fb.firestore();

const commentsCollection = db.collection('Comments');

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} commentData
 * @returns {String} id
 */
const addComment = comment => {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  let commentData = {
    user_id: comment.user_id,
    content: comment.content,
    question_id: comment.question_id,
    username: comment.username,
    timestamp: timestamp(),
  };

  return commentsCollection.add(commentData).then(doc => {
    addCommentToQuestion(commentData.question_id, doc.id);
  });
};

/**
 * @description getComments - used to get all comments of a question
 * @param {Object} questionId
 * @returns {array} comments
 */
const getComments = async questionId => {
  if (!questionId) return new Promise();

  const comments = await commentsCollection
    .where('question_id', '==', questionId)
    .orderBy('timestamp')
    .get();

  let commentsData = [];
  comments.forEach(comment => {
    commentsData.push(comment.data());
  });

  return commentsData;
};

export { addComment, getComments };
