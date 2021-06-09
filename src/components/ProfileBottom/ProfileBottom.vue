<template>
  <div>
    <div class="newsfeed" v-if="this.listOfQuestions.length">
      <post
        v-for="(post, index) in this.listOfQuestions"
        :key="index"
        :post="post"
      ></post>
    </div>
    <div class="newsfeed" v-else>
      <div class="newsfeed__empty-dashboard">
        You don't have any questions, add questions or follow people in order to
        get one
      </div>
    </div>
  </div>
</template>

<script>
import { getUserQuestions } from "../../services/user.service";
import { getUserInfo, getUserId } from "../../utilities/user";

export default {
  data() {
    return {
      myId: getUserId(),
      listOfQuestions: [],
      userId: window.location.pathname.split("/").pop(),
    };
  },
  methods: {
    setUserQuestions: function() {
      getUserQuestions(this.userId).then((res) => {
        this.listOfQuestions = res;
      });
      console.log(this.listOfQuestions);
    },
  },
  mounted() {
    this.setUserQuestions();
  },
  components: {
    post: () => import("./../Post/Post"),
  },
};
</script>

<style lang="scss" scoped></style>
