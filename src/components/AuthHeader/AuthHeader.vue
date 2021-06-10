<template>
  <div class="header">
    <a href="/" class="header__link">
      <h2 class="header__title">Instahelp</h2>
    </a>

    <img
      src="@/assets/lock.png"
      alt="lock"
      class="header__icon"
      draggable="false"
      v-if="showPasswordLock"
    />

    <p class="header__info">
      Log In into Instahelp to share your questions, thoughts with others.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AuthHeader',
  props: {
    showPasswordLock: false,
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__title {
    font-weight: 300;
    color: $main-color;
  }

  &__link:hover {
    text-decoration: none;
  }

  &__info {
    font-size: 17px;
    line-height: 25px;
    color: $dark-gray;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  &__icon {
    height: 70px;
    margin: 15px auto 0;
  }
}
</style>
