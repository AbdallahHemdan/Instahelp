<template>
  <div id="app">
    <navbar v-if="showNavbar" />

    <main class="container main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { updateAuthState } from '@/utilities/firebase.js';

export default {
  name: 'app',
  components: {
    navbar: () => import('@/components/Navbar/Navbar'),
  },
  computed: {
    showNavbar() {
      return !this.$route.meta.hideNavbar;
    },
  },
  mounted() {
    updateAuthState();
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: $spacing-10x;
}
</style>
