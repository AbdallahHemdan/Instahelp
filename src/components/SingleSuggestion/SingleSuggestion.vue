<template>
  <div class="suggestion">
    <div class="suggestion__left">
      <a :href="`/profile/${user.user_id}`" class="suggestion__user">
        <img
          :src="user.image_url"
          :alt="user.name"
          class="suggestion__user-img"
          draggable="false"
        />

        <div class="suggestion__info">
          <div class="suggestion__username" :title="user.name">
            {{ user.name.substring(0, MAX_NAME_LENGTH) }}
            {{ user.name.length > MAX_NAME_LENGTH ? '...' : '' }}
          </div>
          <span class="suggestion__relation" :title="user.sub_title">
            {{ user.sub_title.substring(0, MAX_SUBTITLE_LENGTH) }}
            {{ user.sub_title.length > MAX_SUBTITLE_LENGTH ? '...' : '' }}
          </span>
        </div>
      </a>
    </div>

    <div class="suggestion__right">
      <a
        :href="'/' + user.id"
        class="suggestion__follow-link"
        v-if="!isFollow"
        @click.prevent="toggleFollowState"
        >Follow</a
      >
      <a
        :href="'/' + user.id"
        class="suggestion__follow-link"
        v-else
        @click.prevent="toggleFollowState"
        >Unfollow</a
      >
    </div>
  </div>
</template>

<script>
import { getUserId } from './../../utilities/user';
import { MAX_NAME_LENGTH, MAX_SUBTITLE_LENGTH } from '@/assets/constants/index.js';
import { followUser, unfollowUser } from '@/services/user.service';

export default {
  name: 'SingleSuggestion',
  data: function() {
    return {
      MAX_NAME_LENGTH,
      MAX_SUBTITLE_LENGTH,
      isFollow: false,
    };
  },
  props: {
    user: {
      type: Object,
      requires: true,
    },
  },
  methods: {
    toggleFollowState: function() {
      this.isFollow = !this.isFollow;

      if (this.isFollow) {
        followUser(getUserId(), this.user.user_id);
      } else {
        unfollowUser(getUserId(), this.user.user_id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.suggestion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 300px;

  &__left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 4rem;
  }

  &__relation {
    color: $dark-gray;
    font-size: 80%;
  }

  &__user-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  &__follow-link {
    text-decoration: none;
  }
}
.suggestion__user {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.suggestion__info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
}
</style>
