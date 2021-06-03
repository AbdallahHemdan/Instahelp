<template>
  <div class="post">
    <div class="post__upper">
      <div class="post__upper-left">
        <img src="./../../assets/me.jpg" alt="owner" class="post__owner-img" draggable="false" />

        <div class="post__header">
          <div class="post__title">
            <a href="/profile" class="post__owner align-middle">
              <span>{{ post.creator }}</span>
              <span class="sub-title">{{ post.creatorSubTitle }}</span>
            </a>
          </div>

          <div class="post__date">Asked: March 28, 2018</div>
        </div>
      </div>

      <div class="post__upper-right">
        <button class="post__options-menu" data-toggle="modal" data-target="#exampleModalCenter">
          <span class="dots">●●●</span>
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button class="post-modal-choice danger-choice">Unfollow</button>
              <button class="post-modal-choice">Go to post</button>
              <button class="post-modal-choice lst-choice" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-question">
      <div class="main-question__upper">
        <img src="./../../assets/conversation.png" alt="question icon" class="question-icon" />

        <span class="main-question__title">
          {{ post.title }}
        </span>
      </div>

      <div class="main-question__lower" v-html="post.description"></div>
    </div>

    <post-action></post-action>
    <div class="post__likes">78 likes</div>
    <hr />
    <post-answers :answers="answers"></post-answers>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data: function() {
    return {}
  },
  methods: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
  },
  components: {
    'post-action': () => import('./../PostAction/PostAction'),
    'post-description': () => import('./../PostDescription/PostDescription'),
    'post-answers': () => import('./../Answers/Answers'),
  },
}
</script>

<style lang="scss" scoped>
.post {
  background: $white;
  margin-bottom: $spacing-4x;
  border: 1px solid $lighter-gray;

  &__upper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
    border-bottom: 1px solid $lighter-gray;

    &-left {
      display: flex;
      align-items: center;
      width: 100%;
    }
  }

  &__owner-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid $light-gray;
    background-color: $white;
    padding: 1px;
    margin-right: $spacing-2x;
  }

  &__owner {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-right: 8px;

    &:hover {
      text-decoration: none;
      color: $main-color;
    }
  }

  &__options-menu {
    border: none;
    background: transparent;
    float: right;
    margin-top: 5px;

    &:focus {
      outline: 0;
    }
  }

  &__likes {
    padding-left: 1rem;
    font-weight: 600;
  }
}

.post-modal-choice {
  width: 100%;
  border: none;
  border-bottom: 1px solid $lighter-gray;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: transparent;
  font-size: 1rem;

  &:hover {
    outline: none;
  }

  &:active {
    outline: none;
  }
}

.modal-content {
  border-radius: 20px;
  width: 85%;
  margin: auto;
}

.danger-choice {
  color: red;
  font-weight: 700;
}

.lst-choice {
  border-bottom: none;
}

.dots {
  font-size: 10px;
  margin-top: 5px;
}

.post__title {
  display: flex;
  align-items: center;
}

.post__date {
  font-size: $font-size-1x;
  color: $dark-gray;
}

.follow-link {
  color: $main-color;
  font-size: $font-size-2x;
  text-decoration: underline;
}

.main-question {
  width: 100%;
  height: auto;
  padding: 1rem;
}

.main-question__upper {
  display: flex;
  align-items: center;
}

.question-icon {
  width: 30px;
  height: 30px;
  margin-right: $spacing-1x;
}

.main-question__title {
  font-size: $font-size-3x;
  font-weight: bold;
}

.main-question__lower {
  margin-top: $spacing-3x;
}

hr {
  width: 80%;
}
</style>
