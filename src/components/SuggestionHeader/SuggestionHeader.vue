<template>
  <div class="suggestions-header">
    <div class="suggestions-header__title">Suggestions For You</div>

    <div
      class="modal fade"
      id="suggestions"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal__header">
            <div class="modal__title">Suggestions</div>

            <div class="modal__close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </div>
          </div>

          <div class="modal-body">
            <follow-item
              v-for="(suggestion, index) in suggestions"
              :key="index"
              :following="suggestion"
            ></follow-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserId } from '@/utilities/user';
import { getSuggestions } from '@/services/suggestion.service';

export default {
  name: 'SuggestionsHeader',
  data: function() {
    return {
      suggestions: '',
    };
  },
  components: {
    'follow-item': () => import('./../FollowItem/FollowItem'),
  },
  methods: {
    setUserSuggestions: function() {
      getSuggestions(getUserId(), 6).then(res => {
        this.suggestions = res;
      });
    },
  },
  mounted() {
    this.setUserSuggestions();
  },
};
</script>

<style lang="scss">
.suggestions-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &__title {
    color: $dark-gray;
    font-weight: 600;
    margin-right: 5rem;
  }

  &__see-all {
    text-decoration: none;
    color: $black;
  }
}

.profile-suggestions {
  cursor: pointer;

  &:hover {
    color: $purple;
  }
}

.modal__header {
  display: flex;
  border-bottom: 1px solid $lighter-gray;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: $font-size-2x;
}

.modal-content {
  border-radius: 12px;
  margin: auto;
}

.modal__close {
  position: absolute;
  right: 24px;
  font-size: 2rem;
  cursor: pointer;
}

.modal__title {
  font-weight: 600;
}

.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  overflow-y: auto;
}
</style>
