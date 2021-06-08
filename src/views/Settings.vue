<template>
  <div class="container-settings">
    <div class="white-card">
      <input
        type="file"
        name="avatar"
        id="avatar"
        hidden
        accept="image/png image/jpeg"
        @change="changeProfileImage"
      />
      <div class="avatar-container">
        <img
          src="https://avatars.githubusercontent.com/u/43186742?v=4"
          alt="avatar"
          class="avatar-container__avatar"
          @click="upload"
        />
        <p class="avatar-container__change-image" @click="upload">
          change
        </p>
      </div>
      <div class="header">
        <h2 class="header__title">Edit your Account</h2>

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
            rows="5"
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
    upload() {
      document.getElementById("avatar").click();
      console.log("uloading");
    },
    changeProfileImage(event) {
      const fd = new FormData();
      if (event.target.files[0]) {
        fd.append("images", event.target.files[0], event.target.files[0].name);
        console.log("2shtat");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-settings {
  margin-top: 20px;
  text-align: center;

  .white-card {
    background-color: $white;
    border: 1px solid $lighter-gray;
    width: 80%;
    margin: 20px 10px 0px 10px;
    padding: 40px;
    padding-bottom: 0px;
    margin: auto;

    @media (max-width: 992px) {
      margin: 14px auto;
    }
  }
  .avatar-container {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    margin: auto;

    &__avatar {
      width: 168px;
      height: 168px;
      border-radius: 50%;
      background-color: $white;
      border: 2px solid $light-gray;
      padding: 4px;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 150px;
        height: 150px;
      }
      @media (max-width: 576px) {
        width: 100px;
        height: 100px;
      }
    }

    &__change-image {
      margin-top: -40px;
      opacity: 0;
      color: $main-color;
      font-family: "Pacifico", cursive;
      font-weight: 300;
    }
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
    @media (max-width: 576px) {
      width: 100px;
      height: 100px;
    }
  }
}
.avatar-container:hover .avatar-container__avatar {
  opacity: 0.3;
}
.avatar-container:hover .avatar-container__change-image {
  opacity: 1;
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
