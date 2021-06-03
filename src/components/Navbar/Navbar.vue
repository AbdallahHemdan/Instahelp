<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white custom-nav">
    <div class="container">
      <a class="navbar-brand brand-name" href="/">Instanews</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>

        <div class="right-part custom-nav__options-list">
          <a
            class="custom-nav__icon"
            v-for="(feature, index) in features"
            :key="index"
            :href="feature.href"
            :title="feature.title"
          >
            <img :src="feature.imgSrc" :alt="feature.title" />
          </a>

          <profile-dropdown></profile-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      features: [
        {
          href: '/',
          title: 'Home',
          imgSrc: 'https://img.icons8.com/ios/30/000000/home.png',
        },
        {
          href: '/contact',
          title: 'Contact Us',
          imgSrc: 'https://img.icons8.com/ios/30/000000/add-contact-to-company.png',
        },
        {
          href: '/about',
          title: 'About Us',
          imgSrc: 'https://img.icons8.com/ios/30/000000/about-us-male.png',
        },
      ],
    }
  },
  components: {
    'profile-dropdown': () => import('./../ProfileDropdown/ProfileDropdown'),
  },
}
</script>

<style lang="scss" scoped>
@import './Navbar.scss';
</style>
