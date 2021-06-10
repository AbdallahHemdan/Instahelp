<template>
  <div>
    <div class="newsfeed" v-if="this.listOfQuestions.length">
      <post v-for="(post, index) in this.listOfQuestions" :key="index" :post="post"></post>
    </div>

    <div class="newsfeed" v-else>
      <div class="newsfeed__empty-dashboard">
        <img src="@/assets/heart-box-2.svg" alt="empty box" class="empty__icon" />

        <div class="empty__message">
          <h1 class="empty__message-header">Hi {{ username }}!</h1>

          <p class="empty__message-subtitle">
            It looks like you have nothing due today. Add some posts, follow some users. Once you
            do, this page will show you what you need to see.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUsername, getUserId } from '@/utilities/user';
import { getUserQuestions } from '@/services/user.service';

export default {
  data() {
    return {
      myId: getUserId(),
      listOfQuestions: [],
      userId: window.location.pathname.split('/').pop(),
      username: '',
    };
  },
  methods: {
    setUserQuestions: function() {
      this.username = getUsername();
      getUserQuestions(this.userId).then(res => {
        this.listOfQuestions = res;
      });
      console.log(this.listOfQuestions);
    },
  },
  mounted() {
    this.setUserQuestions();
  },
  components: {
    post: () => import('./../Post/Post'),
  },
};
</script>

<style lang="scss" scoped>
.newsfeed__empty-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: $spacing-8x;
}

.empty__icon {
  width: 150px;
  height: 150px;
}

.empty__message {
  margin-top: $spacing-2x;
  text-align: center;

  &-header {
    font-size: 34px;
    font-weight: 400;
  }

  &-subtitle {
    font-size: 18px;
    color: #6d6d6d;
  }
}
</style>
