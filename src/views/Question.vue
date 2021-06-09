<template>
  <div class="question container">
    <post :post="question" :showGotoPost="false"></post>
  </div>
</template>

<script>
import { getQuestion } from './../services/question.service';

export default {
  name: 'Question',
  data: function() {
    return {
      id: '',
      question: {},
    };
  },
  methods: {
    setQuestionData: function() {
      getQuestion(this.id).then(data => {
        this.question = data;
      });
    },
  },
  components: {
    post: () => import('./../components/Post/Post.vue'),
  },
  mounted() {
    this.id = this.$route.params.id;
    this.setQuestionData();
  },
};
</script>

<style lang="scss" scoped></style>
