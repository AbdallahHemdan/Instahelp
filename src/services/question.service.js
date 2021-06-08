import { firebaseApp } from './../main'

const db = firebaseApp.firestore();

const questionsCollection = db.collection('Questions');

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} data
 * @returns {String} id
 */
const addQuestion = question => {
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
  console.log('questions.docs: ', questions.docs);

  return questions.docs;
};

export {
    addQuestion,
    getQuestion,
    getAllQuestions
}