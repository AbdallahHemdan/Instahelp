<template>
  <div class="profile">
    <!-- 
      < profile header > 
      < lower container> 
      
    -->
    <profile-header></profile-header>
    <profile-bottom></profile-bottom>
  </div>
</template>

<script>
export default {
  components: {
    "profile-header": () =>
      import("./../components/ProfileHeader/ProfileHeader"),
    "profile-bottom": () =>
      import("./../components/ProfileBottom/ProfileBottom"),
  },
};
</script>

<style lang="scss" scoped></style>
