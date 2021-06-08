<template>
  <div class="container-settings">
    <div class="white-card">
      <div class="header">
        <a href="/" class="header__link">
          <h2 class="header__title">Edit your Accout</h2>
        </a>

        <p class="header__info">
          you can edit your profile information so people can know you better
        </p>
      </div>
      <form>
        <div class="form-label-group">
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="user name"
            v-model="name"
          />
        </div>

        <div class="form-label-group">
          <input
            type="text"
            name="title"
            id="title"
            class="form-control"
            placeholder="professional title"
            v-model="title"
          />
        </div>

        <div class="form-label-group">
          <textarea
            type="text"
            name="description"
            id="description"
            rows="10"
            class="form-control"
            placeholder="description"
            v-model="description"
          />
        </div>

        <button
          type="submit"
          class="btn btn-block submit-settings"
          @click.prevent="update"
        >
          update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      title: "",
      description: "",
    };
  },
  methods: {
    update() {
      console.log(this.name, this.title, this.description);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-settings {
  text-align: center;
}

.container-settings {
  margin-top: 20px;

  .white-card {
    background-color: $white;
    border: 1px solid $lighter-gray;
    width: 80%;
    margin: 20px 10px 0px 10px;
    padding: 40px;
    margin: auto;

    @media (max-width: 992px) {
      margin: 14px auto;
    }
  }
}

.submit-settings {
  width: 25%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 6px;
  background-color: $main-color;
  color: $white;
  font-size: 20px;
}
.submit-settings:hover {
  background-color: $sub-color;
}

.form-control {
  background: $white-smoke;
  padding: 8px 0 8px 10px;
  color: $darker-gray;
  font-size: $font-size-2x;
  line-height: 18px;
  min-height: 40px;
  margin-bottom: 2rem;
}

.header {
  &__title {
    font-family: "Pacifico", cursive;
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
}
</style>
