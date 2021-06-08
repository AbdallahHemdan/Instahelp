import { firebaseApp } from './../main'

import { addTagToQuestion } from './question.service';

const db = firebaseApp.firestore();

const tagsCollection = db.collection('Tags');

/**
 * @description addTag 
 * @param {Object} tagData
 * @returns {String} id
*/
const addTag = tag => {
  let tagData = {
    description: tag.description,
    questions_ids: tag.questions_ids
  }

  tagsCollection.add(tagData).then(doc => {
    addTagToQuestion(doc.question_id, doc.id);
  });
};

/**
 * @description getTagsForQuestion - used to get all tags of a question
 * @param {Object} questionId
 * @returns {array} tags
*/
const getTagsForQuestion = async questionId => {
  const tags = await tagsCollection.where("question_id", "==", questionId).get();
  
  let tagsData = []
  tags.forEach(tag => {
    tagsData.push(tag.data())
  }) 

  return tagsData;
};

/**
 * @description getTags - used to get all tags
 * @returns {array} tags
 */
const getTags = async () => {
    const tags = await tagsCollection.get();

    let tagsData = []
    tags.forEach(tag => {
        tagsData.push(tag.data())
    }) 

    return tagsData;
};

export {
  addTag,
  getTagsForQuestion,
  getTags,
}