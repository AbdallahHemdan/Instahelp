<template>
  <div class="post-actions">
    <div class="post-actions__left">
      <a class="post-actions__like">
        <img
          :src="upImg"
          class="post-actions__icon-thumbs"
          @click="changeUpVotedState"
          draggable="false"
        />
      </a>

      <a class="post-actions__like">
        <img
          :src="downImg"
          class="post-actions__icon-thumbs"
          @click="changeDownVotedState"
          draggable="false"
        />
      </a>

      <a class="post-actions__comment">
        <img
          src="./../../assets/svgs/comment.svg"
          alt="comment"
          class="post-actions__icon"
          draggable="false"
          @click="focusComment"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAction',
  data: function() {
    return {
      isUpVoted: false,
      isDownVoted: false,
      saved: false,
    };
  },
  computed: {
    upImg: function() {
      let liked = require('./../../assets/svgs/up-1.svg');
      let unLiked = require('./../../assets/svgs/up-2.svg');

      return this.isUpVoted ? liked : unLiked;
    },
    downImg: function() {
      let liked = require('./../../assets/svgs/down-1.svg');
      let unLiked = require('./../../assets/svgs/down-2.svg');

      return this.isDownVoted ? liked : unLiked;
    },
    savedImg: function() {
      let saved = require('./../../assets/svgs/saved.svg');
      let unSaved = require('./../../assets/svgs/unsaved.svg');
      return this.saved ? saved : unSaved;
    },
  },
  props: {
    id: '',
    likeAction: '',
    dislikeAction: '',
  },
  methods: {
    changeUpVotedState: function() {
      this.isUpVoted = !this.isUpVoted;

      if (this.isUpVoted) {
        this.isDownVoted = false;
      }

      if (this.isUpVoted) {
        this.likeAction(this.id);
      } else {
        this.dislikeAction(this.id);
      }
    },
    changeDownVotedState: function() {
      this.isDownVoted = !this.isDownVoted;

      if (this.isDownVoted) {
        this.isUpVoted = false;
      }

      if (this.isDownVoted) {
        this.dislikeAction(this.id);
      } else {
        this.likeAction(this.id);
      }
    },
    changeSaveState: function() {
      this.saved = !this.saved;
    },
    focusComment: function() {},
  },
};
</script>

<style lang="scss" scoped>
.post-actions {
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;

  &__left > a {
    padding: 0.5rem;
    cursor: pointer;
  }

  &__right > a {
    padding: 0.5rem;
    cursor: pointer;
  }

  &__icon {
    width: 25px;
    height: 25px;
  }

  &__icon-thumbs {
    width: 20px;
    height: 20px;
  }
}
</style>
