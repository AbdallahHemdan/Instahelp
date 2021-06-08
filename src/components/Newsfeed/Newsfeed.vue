<template>
  <div class="newsfeed">
    <post v-for="(post, index) in questions" :key="index" :post="post" :answers="answers"></post>
  </div>
</template>

<script>
import { getAllQuestions } from './../../services/question.service';

export default {
  name: 'Newsfeed',
  data: function() {
    return {
      answers: require('./../../mock/Home/Answers').default,
      questions: '',
    };
  },
  methods: {},
  components: {
    post: () => import('./../Post/Post'),
  },
  mounted() {},
  computed: {
    async posts() {
      return getAllQuestions().then(res => {
        this.questions = res;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
