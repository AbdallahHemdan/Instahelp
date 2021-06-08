<template>
  <div class="answer">
    <div class="answer__content">
      <a :href="`/profile/${answer.user_id}`">
        <span>{{ answer.username }}</span>
      </a>
      {{ answer.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleAnswer',
  data: function() {
    return {
      liked: false,
    };
  },
  props: {
    answer: '',
  },
  computed: {
    likedImg: function() {
      let liked = require('./../../assets/svgs/liked.svg');
      let unLiked = require('./../../assets/svgs/unliked.svg');

      return this.liked ? liked : unLiked;
    },
  },
  methods: {
    changeLikeState: function() {
      this.liked = !this.liked;
    },
  },
};
</script>

<style lang="scss" scoped>
.answer {
  padding-bottom: 0.5rem;
  color: $black;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;

  &__like-action {
    padding-left: 5px;
  }

  span {
    font-weight: 600;
    color: $black;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
}

.icon {
  width: $font-size-3x;
  height: $font-size-3x;
}
</style>
