<template>
  <div class="container">
    <!-- 
       <titleContainer > 
       <discriptipnContainer >
       <naveContainer >
    -->
    <div class="title-container">
      <!-- 
          <image> 
          <title>
       -->
      <img
        src="https://avatars.githubusercontent.com/u/43186742?v=4"
        alt="avatar"
        class="title-container__avatar"
      />

      <div class="title-container__name">
        <div class="title-container__display-name">
          Ahmed Mahboub
          <span>
            <button
              @mouseover="followHover = true"
              @mouseleave="followHover = false"
              v-on:click="follow"
              class="action-btn"
            >
              <div v-if="followed === true">unfollow</div>
              <div v-if="followed === false">follow</div>
            </button>
          </span>
        </div>
        <div class="title-container__profitional-tital">
          Software Engineer Stduent
        </div>
      </div>
    </div>

    <div class="discritipon-container">
      Computer Enginerring student interested in problem solveing and SDE. I am actively looking for
      a Software Engineering-winter/summer 2021-internship.
    </div>

    <div class="nav-container">
      <div class="profile-posts nav-container__statistics-item">
        <span class="bold">494</span> posts
      </div>

      <div
        class="profile-followers nav-container__statistics-item"
        data-toggle="modal"
        data-target="#following"
      >
        <span class="bold">40.8k</span> followers
      </div>

      <div
        class="modal fade"
        id="following"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal__header">
              <div class="modal__title">Followers</div>
              <div class="modal__close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </div>
            </div>

            <div class="modal-body">
              <follow-item
                v-for="(following, index) in listOfFollowers"
                :key="index"
                :following="following"
              ></follow-item>
            </div>
          </div>
        </div>
      </div>

      <div
        class="profile-following nav-container__statistics-item"
        data-toggle="modal"
        data-target="#followers"
      >
        <span class="bold">1,708</span> following
      </div>

      <div
        class="modal fade"
        id="followers"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal__header">
              <div class="modal__title">Following</div>

              <div class="modal__close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </div>
            </div>

            <div class="modal-body">
              <follow-item
                v-for="(following, index) in listOfFollowing"
                :key="index"
                :following="following"
              ></follow-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      followed: false,
      followHover: false,
    };
  },
  components: {
    'follow-item': () => import('./../FollowItem/FollowItem'),
  },
  methods: {
    follow: function(event) {
      this.followed = !this.followed;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 20px;
  border-bottom: 2px solid $light-gray;
}
.title-container {
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 10px;

  &__avatar {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    background-color: $white;
    border: 2px solid $light-gray;
    padding: 4px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
    @media (max-width: 576px) {
      width: 100px;
      height: 100px;
    }
  }
  &__name {
    padding-left: 2rem;
    padding-top: 50px;
  }

  &__display-name {
    font-size: 28px;
    font-weight: 700;
    margin-right: 1rem;

    @media (max-width: 420px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
  &__profitional-tital {
    color: $darker-gray;
    font-size: 14px;
    font-weight: 100;
    margin-right: 1rem;

    @media (max-width: 420px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
}
.discritipon-container {
  padding: 20px;
  font-size: 18px;
  width: 80%;
  color: $darker-gray;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
}

.nav-container {
  color: $main-color;
  padding-left: 20px;
  display: flex;
  margin-top: 1rem;

  @media (max-width: 576px) {
    margin-top: 0.5rem;
    justify-content: center;
  }
  &__statistics-item {
    margin-right: 2rem;

    @media (max-width: 768px) {
      margin-right: 1rem;
    }

    @media (max-width: 420px) {
      margin-right: 0.5rem;
    }
  }
}

.bold {
  font-weight: 600;
}

.profile-following,
.profile-followers {
  cursor: pointer;
}
.profile-following:hover,
.profile-followers:hover {
  color: $purple;
}

.modal__header {
  display: flex;
  border-bottom: 1px solid $lighter-gray;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: $font-size-2x;
}

.modal-content {
  border-radius: 12px;
  width: 400px;
  height: 400px;
  margin: auto;
}

.modal__close {
  position: absolute;
  right: 24px;
  font-size: 2rem;
  cursor: pointer;
}

.modal__title {
  font-weight: 600;
}

.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  overflow-y: auto;
}
.action-btn {
  border: 1px solid $lighter-gray;
  padding: 4px $font-size-3x;
  background-color: transparent;
  margin-right: 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: $font-size-2x;

  &:hover {
    background-color: $main-color;
    color: $white;
  }

  &:active:focus {
    border: none;
  }

  @media (max-width: 768px) {
    padding: 4px 12px;
  }
}
</style>
