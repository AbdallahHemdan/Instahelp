<template>
  <div class="home container">
    <div class="home__left">
      <new-post></new-post>
      <newsfeed></newsfeed>
    </div>

    <div class="home__right">
      <user-suggestions></user-suggestions>
    </div>
  </div>
</template>

<script>
import { getUserData } from './../services/user.service';

export default {
  name: 'Home',
  data: function() {
    return {};
  },
  methods: {
    setUserData() {
      let userId = localStorage.getItem('user_id');

      getUserData(userId).then(data => {
        console.log('data.sub_title: ', data.sub_title);
        localStorage.setItem('user_image', data.image);
        localStorage.setItem('user_subtitle', data.sub_title);
        localStorage.setItem('user_description', data.description);
      });
    },
  },
  components: {
    newsfeed: () => import('./../components/Newsfeed/Newsfeed'),
    'user-suggestions': () => import('./../components/UserSuggestions/UserSuggestions'),
    'new-post': () => import('./../components/NewPost/NewPost'),
  },
  mounted() {
    this.setUserData();
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__left {
    float: left;
    width: 60%;
    margin-bottom: 30px;
  }

  &__right {
    position: fixed;
    left: 62%;
    width: 40%;
  }

  @media (max-width: 768px) {
    &__left {
      width: 100%;
    }

    &__right {
      display: none;
    }
  }
}
</style>
