<template>
  <div class="post">
    <div class="post__upper">
      <div class="post__upper-left">
        <img :src="userInfo.image" alt="owner" class="post__owner-img" draggable="false" />

        <div class="post__header">
          <div class="post__title">
            <a :href="`/profile/${userInfo.id}`" class="post__owner align-middle">
              <span>{{ userInfo.username }}</span>
              <span class="sub-title"> {{ userInfo.subtitle }} </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="post__lower">
      <form class="create-post-form">
        <textarea
          name="question-title"
          placeholder="What is your question title?"
          class="question-title-area"
          :value="questionTitle"
          @input="updateTitle"
        ></textarea>

        <textarea
          name="question-description"
          placeholder="What is your question description ?"
          class="question-description-area"
          :value="questionDescription"
          @input="updateDescription"
        ></textarea>
        <vue-tags-input
          v-model="tag"
          :tags="tags"
          :autocomplete-items="filteredItems"
          placeholder="What is your question tags ?"
          @tags-changed="newTags => (tags = newTags)"
          class="question__tags"
        />
      </form>
      <button
        type="submit"
        class="post-btn"
        :disabled="!questionTitle || !questionDescription"
        @click.prevent="postQuestion"
      >
        Post
      </button>
    </div>
  </div>
</template>

<script>
import { getUserId } from './../../utilities/user';
import { getUserInfo } from './../../utilities/user';
import { addQuestion } from './../../services/question.service';
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  name: 'NewPost',
  data: function() {
    return {
      questionTitle: '',
      questionDescription: '',
      tag: '',
      tags: [],
      autocompleteItems: [],
    };
  },
  computed: {
    userInfo() {
      return getUserInfo();
    },
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  components: {
    VueTagsInput,
  },
  methods: {
    updateTitle: function(e) {
      this.questionTitle = e.target.value;

      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    updateDescription: function(e) {
      this.questionDescription = e.target.value;

      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
    postQuestion: function() {
      let description = this.questionDescription.replace(/(?:\r\n|\r|\n)/g, '<br>');

      let question = {
        title: this.questionTitle,
        content: description,
        user_id: getUserId(),
        tags: ['adel', 'hemdan'],
      };

      this.questionTitle = '';
      this.questionDescription = '';

      addQuestion(question);
    },
  },
  mounted() {
    /**
     * Handle auto-resizing for text area of the question description
     */
    this.$nextTick(() => {
      this.$el.setAttribute('style', 'height', `${this.$el.scrollHeight}px`);
    });
  },
};
</script>

<style lang="scss">
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

.question-title-area {
  width: 100%;
  border: none;
  padding: 24px 20px 0;
  resize: none;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: $dark-gray;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: $dark-gray;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: $dark-gray;
  }

  &:-ms-input-placeholder {
    color: $dark-gray;
  }
}

.question-description-area {
  width: 100%;
  border: none;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: $dark-gray;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: $dark-gray;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: $dark-gray;
  }

  &:-ms-input-placeholder {
    color: $dark-gray;
  }
}

.post-btn {
  border: none;
  color: $main-color;
  background-color: transparent;
  font-size: $font-size-3x;
  padding: 24px 10px 0 0;
  font-weight: 500;

  &:disabled {
    color: rgba(0, 123, 255, 0.4);
  }
}

.post__lower {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: end;
  color: $dark-gray;
  line-height: 18px;
  min-height: 56px;
}

.create-post-form {
  width: 100%;
}

.question__tags {
  width: 100%;
  border: none;
  padding: 10px 20px;
}

.ti-input {
  padding: 0 !important;
  border: none !important;
}

.ti-new-tag-input-wrapper {
  padding: 0 !important;
}

.vue-tags-input {
  width: 100% !important;
}

.ti-tag {
  background-color: $main-color !important;
  padding: 4px !important;
}
</style>
