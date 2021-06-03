<template>
  <div class="profile">
    <!-- 
      < profile header > 
      < lower container> 
      
    -->
    <profile-header></profile-header>
  </div>
</template>

<script>
export default {
  components: {
    "profile-header": () =>
      import("./../components/ProfileHeader/ProfileHeader"),
  },
};
</script>

<style lang="scss" scoped></style>
