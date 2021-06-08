<template>
  <div class="user-info">
    <img
      :src="userInfo.image"
      alt="Hemdan's profile image"
      class="user-info__img"
      draggable="false"
    />

    <div class="user-names">
      <div class="user-info__username">{{ userInfo.username }}</div>
      <span class="user-info__sub-name">{{ userInfo.subtitle }}</span>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from './../../utilities/user';

export default {
  name: 'UserInfo',
  data: {},
  components: {},
  computed: {
    userInfo() {
      return getUserInfo();
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid $light-gray;
    padding: 2px;
    margin-right: 15px;
  }

  &__username {
    font-size: 1rem;
    font-weight: 600;
  }

  &__sub-name {
    font-size: 0.8rem;
    color: $dark-gray;
  }
}
</style>
