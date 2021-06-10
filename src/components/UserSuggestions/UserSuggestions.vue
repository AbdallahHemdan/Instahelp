<template>
  <div class="user-suggestions">
    <user-info></user-info>

    <suggestion-header v-if="usersToSuggest.length"></suggestion-header>

    <single-suggestion v-for="(user, index) in usersToSuggest" :key="index" :user="user">
    </single-suggestion>

    <div class="footer">
      ALL RIGHTS RECEIVED
      <a href="https://github.com/AbdallahHemdan" class="footer__link">INSTAHELP</a> &copy; 2021
    </div>
  </div>
</template>

<script>
import { getUserId } from '@/utilities/user';
import { getSuggestions } from '@/services/suggestion.service';

export default {
  name: 'UserSuggestions',
  data: function() {
    return {
      usersToSuggest: '',
    };
  },
  methods: {
    setUserSuggestions: function() {
      getSuggestions(getUserId(), 6).then(res => {
        this.usersToSuggest = res;
      });
    },
  },
  computed: {},
  components: {
    'user-info': () => import('@/components/UserInfo/UserInfo'),
    'suggestion-header': () => import('@/components/SuggestionHeader/SuggestionHeader'),
    'single-suggestion': () => import('@/components/SingleSuggestion/SingleSuggestion'),
  },
  mounted() {
    this.setUserSuggestions();
  },
};
</script>

<style lang="scss" scoped>
.footer {
  float: left;
  margin-top: 2rem;
  margin-left: 8px;
  font-size: 15px;
  color: $dark-gray;
  text-align: center;

  &__link {
    text-decoration: none;
  }
}
</style>
