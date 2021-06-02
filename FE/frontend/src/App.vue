<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">contact</router-link> |
      <router-link to="/error">404</router-link> |
      <router-link to="/profile">profile</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/signup">signup</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
