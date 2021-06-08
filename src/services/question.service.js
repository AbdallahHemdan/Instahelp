import { firebaseApp } from './../main';

const db = firebaseApp.firestore();

const questionsCollection = db.collection('Questions');

/**
 * @description addQuestion - used to add a new question to the list
 * @param {Object} data
 * @returns {String} id
 */
const addQuestion = question => {
  let questionData = {
    question_id: '',
    user_id: question.user_id,
    title: question.title,
    content: question.content,
    tags: question.tags,
    likes: 0,
    comments: [],
    date: new Date().toDateString(),
  };

  return questionsCollection.add(questionData).then(doc => {
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

  let questionsData = [];

  questions.forEach(question => {
    questionsData.push(question.data());
  });

  return questionsData;
};

export { addQuestion, getQuestion, getAllQuestions };
