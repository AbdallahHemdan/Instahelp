import { fb } from '@/plugins/firebase.js';

import { addTagToQuestion } from './question.service';

const db = fb.firestore();

const tagsCollection = db.collection('Tags');

/**
 * @description putTags
 * @param {Object} tags names
 */
const putTags = async (tags, questionId) => {
  await tags.forEach(async tag => {
    let findTag = await tagsCollection.where('tag_name', '==', tag).get();

    if (findTag.docs.length) {
      addQuestionToTag(findTag.data().tag_id, questionId);
    } else {
      addTag({
        tag_name: tag,
        description: '',
        questions_ids: [questionId],
      });
    }
  });
};

/**
 * @description addTag
 * @param {Object} tagData
 */
const addTag = tag => {
  let tagData = {
    tag_id: '',
    tag_name: tag.tag_name,
    description: tag.description,
    questions_ids: tag.questions_ids,
  };

  tagsCollection.add(tagData).then(doc => {
    tagsCollection.doc(doc.id).update({
      tag_id: doc.id,
    });
  });
};

/**
 * @description add question - used to add a question id to a tag list of questions
 * @param {Object} tagId, questionId
 */
const addQuestionToTag = (tagId, questionId) => {
  let tagRef = tagsCollection.doc(tagId);
  tagRef.update({
    questions_ids: firebase.firestore.FieldValue.arrayUnion(questionId),
  });
  addTagToQuestion(questionId, tagId);
};

/**
 * @description getTagsForQuestion - used to get all tags of a question
 * @param {Object} questionId
 * @returns {array} tags
 */
const getTagsForQuestion = async questionId => {
  const tags = await tagsCollection.where('questions_ids', 'array-contains', questionId).get();

  let tagsData = [];
  tags.forEach(tag => {
    tagsData.push(tag.data());
  });

  return tagsData;
};

/**
 * @description getTags - used to get all tags
 * @returns {array} tags
 */
const getTags = async () => {
  const tags = await tagsCollection.get();

  let tagsData = [];
  tags.forEach(tag => {
    tagsData.push(tag.data());
  });

  return tagsData;
};

/**

 * @description getTagsByName
 * @returns {array} questions
 */

const getTagsByName = async tagName => {
  const questionsCollection = db.collection('Questions');
  const questions = await questionsCollection.where('tags', 'array-contains', tagName).get();

  let questionsData = [];

  questions.forEach(question => {
    questionsData.push(question.data());
  });

  return questionsData;
};

export { addTag, putTags, getTags, getTagsByName, addQuestionToTag, getTagsForQuestion };
