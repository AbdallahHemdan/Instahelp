<template>
  <div class="newsfeed">
    <post v-for="(post, index) in posts" :key="index" :post="post" :answers="answers"></post>
  </div>
</template>

<script>
import { getAllQuestions } from './../../main'
export default {
  name: 'Newsfeed',
  data: function() {
    return {
      posts: require('./../../mock/Home/Posts').default,
      answers: require('./../../mock/Home/Answers').default,
    }
  },
  methods: {},
  components: {
    post: () => import('./../Post/Post'),
  },
  mounted() {
    console.log('lol: ', this.posts)
  },
}
</script>

<style lang="scss" scoped></style>
