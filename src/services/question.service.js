import firebase from 'firebase'
import { firebaseApp } from './../main'

const db = firebaseApp.firestore();

const questionsCollection = db.collection('Questions');

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} data
 * @returns {String} id
 */
const addQuestion = question => {
  let questionData = {
    question_id: "",
    user_id: question.user_id,
    title: question.title,
    content: question.content,
    tags: question.tags,
    likes: 0,
    comments: [ ],
    date: new Date(),
  }

  questionsCollection.add(questionData).then(doc => {
    questionsCollection.doc(doc.id).update({
      question_id: doc.id
    })
  });
};

/**
 *
 * @param {string} id
 * @returns data of the question
 */
const getQuestion = async id => {
  const question = await questionsCollection.doc(id).get();
  return question.exists ? question.data() : null;
};

/**
 *
 * @returns data of all the questions
 */
const getAllQuestions = async () => {
  const questions = await questionsCollection.get();

  let questionsData = []
  questions.forEach(question => {
    questionsData.push(question.data())
  }) 

  return questionsData;
};

/**
 * @description updateQuestion - used to update a question data
 * @param {Object} QuestionData
 * @returns {String} question_id
 */
const updateQuestion = questionData => {
  return questionsCollection.doc(questionData.question_id).update(questionData);
};

/**
 * @description add comment - used to add a comment id to a question list of comments
 * @param {Object} questionId, commentId
 */
const addCommentToQuestion = (questionId, commentId) => {
  let questionRef = questionsCollection.doc(questionId);
  questionRef.update({
    comments: firebase.firestore.FieldValue.arrayUnion(commentId)
  })
}

/**
 * @description add tag - used to add a tag id to a question list of comments
 * @param {Object} questionId, tagId
 */
 const addTagToQuestion = (questionId, tagId) => {
  let questionRef = questionsCollection.doc(questionId);
  questionRef.update({
    tags: firebase.firestore.FieldValue.arrayUnion(tagId)
  })
}

/**
 * @description likeQuestion - used to increase the counter of likes
 * @param {Object} questionId
 */
 const likeQuestion = questionId => {
  let questionRef = questionsCollection.doc(questionId);
  questionRef.update({
    likes: firebase.firestore.FieldValue + 1
  })
}

/**
 * @description dislikeQuestion - used to decrease the counter of likes
 * @param {Object} questionId
 */
 const dislikeQuestion = questionId => {
  let questionRef = questionsCollection.doc(questionId);
  questionRef.update({
    likes: firebase.firestore.FieldValue - 1
  })
}

/**
 * @description remove question
 * @param {Object} questionId
 */
const deleteQuestion = questionId => {
  questionsCollection.doc(questionId).delete();
}

export {
    addQuestion,
    getQuestion,
    getAllQuestions,
    updateQuestion,
    addCommentToQuestion,
    addTagToQuestion,
    likeQuestion,
    dislikeQuestion,
    deleteQuestion
}