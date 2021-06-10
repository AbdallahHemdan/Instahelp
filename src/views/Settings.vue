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
        <img :src="this.image" class="avatar-container__avatar" @click="upload" />
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
          class="btn  submit-settings"
          @click.prevent="update"
          :disabled="!isImageReady"
        >
          update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { getUserData, updateImage, updateUserData } from '@/services/user.service';
import { getUserInfo, getUserId } from '@/utilities/user';

export default {
  data() {
    return {
      name: '',
      title: '',
      description: '',
      image: '',
      myId: getUserId(),
      isImageReady: true,
    };
  },
  methods: {
    setUseInfo: function() {
      getUserData(this.myId).then(res => {
        this.name = res.name;
        this.title = res.sub_title;
        this.description = res.description;
        this.image = localStorage.getItem('user_image');
      });
    },
    getUserData: function() {
      this.setUseInfo();
    },
    update() {
      /**
       * {
       *  user_id:"",
       *  name :"",
       *  sub_title:"",
       *  description:""
       * }
       */
      let userData = {
        user_id: this.myId,
        name: this.name,
        sub_title: this.title,
        description: this.description,
      };

      localStorage.removeItem('displayName');
      localStorage.removeItem('user_subtitle');
      localStorage.removeItem('description');

      updateUserData(userData).then(res => {
        setTimeout(() => {
          localStorage.setItem('description', userData.description);
          localStorage.setItem('user_subtitle', userData.sub_title);
          localStorage.setItem('displayName', userData.name);
          window.location = window.location;
        }, 500);
      });
    },
    upload() {
      document.getElementById('avatar').click();
    },
    changeProfileImage(event) {
      if (event.target.files[0]) {
        this.isImageReady = false;
        updateImage(this.myId, event.target.files[0]).then(res => {
          localStorage.removeItem('user_image');
          localStorage.setItem('user_image', res);
          this.isImageReady = true;
        });
      }
    },
  },
  mounted() {
    this.getUserData();
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
      width: 100%;
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

@media (max-width: 768px) {
  .submit-settings {
    width: 50%;
  }
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
