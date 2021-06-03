<template>
  <div class="answers">
    <answer v-for="(answer, index) in answers" :key="index" :answer="answer"></answer>

    <section>
      <form class="answers__leave-answer">
        <textarea
          name="answer"
          placeholder="Add an answer..."
          class="answers__answer-area"
          :value="answerMessage"
          @input="update"
        ></textarea>
        <button
          type="submit"
          class="answers__post-btn"
          :disabled="!answerTyped"
          @click.prevent="addAnswer"
        >
          Post
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Answers',
  components: {
    answer: () => import('./../SingleAnswer/SingleAnswer'),
  },
  data: function() {
    return {
      answerMessage: '',
    }
  },
  props: {
    answers: {
      type: Array,
      required: true,
    },
  },
  computed: {
    answerTyped: function() {
      return this.answerMessage.length ? true : false
    },
    processedAnswer: function() {
      return marked(this.answerMessage, { sanitize: true })
    },
  },
  methods: {
    update: _.debounce(function(e) {
      this.answerMessage = e.target.value
    }, 300),
    addAnswer: function() {
      console.log(this.answerMessage)
    },
  },
}
</script>

<style lang="scss" scoped>
.answers {
  padding-left: 1rem;

  &__post-time {
    font-size: 0.8rem;
    color: $dark-gray;
    padding-bottom: 0.5rem;
  }

  &__leave-answer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $lighter-gray;
    color: $dark-gray;
    line-height: 18px;
    min-height: 56px;
  }

  &__answer-area {
    width: 100%;
    border: none;
    padding-top: 24px;

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

  &__post-btn {
    border: none;
    color: $main-color;
    background-color: transparent;
    font-size: $font-size-3x;
    padding-right: 10px;
    font-weight: 500;

    &:disabled {
      color: rgba(0, 123, 255, 0.4);
    }
  }
}
</style>
