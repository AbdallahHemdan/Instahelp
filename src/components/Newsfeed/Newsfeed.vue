<template>
  <div class="newsfeed" v-if="questions.length">
    <post v-for="(post, index) in questions" :key="index" :post="post"></post>
  </div>
  <div class="newsfeed" v-else>
    <div class="newsfeed__empty-dashboard">
      You don't have any questions, add questions or follow people in order to get one
    </div>
  </div>
</template>

<script>
import { getAllQuestions } from './../../services/question.service';

export default {
  name: 'Newsfeed',
  data: function() {
    return {
      questions: '',
    };
  },
  methods: {
    setAllQuestion: function() {
      getAllQuestions().then(res => {
        this.questions = res;
      });
    },
  },
  components: {
    post: () => import('./../Post/Post'),
  },
  mounted() {
    this.setAllQuestion();
  },
};
</script>

<style lang="scss" scoped></style>
