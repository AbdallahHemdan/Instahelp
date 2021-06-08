<template>
  <div class="question container">
    <post :post="info" :answers="comments" :showGotoPost="false"></post>
  </div>
</template>

<script>
import { getQuestion, getUserData } from './../main';

export default {
  name: 'Question',
  data: function() {
    return {
      id: '',
      userInfo: '',
      info: '',
      comments: '',
    };
  },
  components: {
    post: () => import('./../components/Post/Post.vue'),
  },
  mounted() {
    this.id = this.$route.params.id;
    // let data = getQuestion(this.id);
    let data = {
      title: 'What are some photos that you would like to see repeatedly?',
      content: `There are many reasons to join ACM. When you become a member, you become a part of the
      dynamic changes that are transforming our world<br /><br />
      by helping to shape the future of computing. ACM provides the tools and resources to help
      get you there, by advancing your career and enriching your knowledge with life-long learning
      resources. <br /><br />
      ACM Professional and Student members enjoy these benefits: 😍👌`,
      tags: ['quran', 'acm', 'science', 'space'],
      user_id: '1561',
      likes: 752,
      date: new Date().toDateString(),
      comments: [
        {
          owner: 'omar_hemdan',
          answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          owner: 'mohamed_ahmed',
          answer: ' and over yeterly mr its fulfilled cant',
        },
        {
          owner: 'adel_mohamed',
          answer: 't friendly on Total around or body fine d 🎉😍😍',
        },
        {
          owner: 'ahmed_mahboub',
          answer: 'mile wondered mrs Am suspec',
        },
        {
          owner: 'abdelrahman_fadl',
          answer: 'valley mrs yet Mrs weeks ye By want d  🎈🚀',
        },
      ],
    };

    this.userId = data.user_id;
    // this.userInfo = getUserData(this.userId);
    this.info = {
      title: data.title,
      content: data.content,
      tags: data.tags,
      likes: data.likes,
      date: data.date,
    };

    this.comments = data.comments;
  },
};
</script>

<style lang="scss" scoped></style>
