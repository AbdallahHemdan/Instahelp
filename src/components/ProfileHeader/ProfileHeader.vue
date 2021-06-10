<template>
  <div class="container">
    <div class="title-container">
      <img :src="this.userInfo.image" class="title-container__avatar" />

      <div class="title-container__name">
        <div class="title-container__display-name">
          {{ this.userInfo.name }}
          <span>
            <button
              v-if="this.myId !== this.userId"
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
          {{ this.userInfo.sub_title }}
        </div>
      </div>
    </div>

    <div class="description-container">
      {{ this.userInfo.description }}
    </div>

    <div class="nav-container">
      <div class="profile-posts nav-container__statistics-item">
        <span class="bold">{{ this.listOfQuestions.length }}</span> questions
      </div>

      <div
        class="profile-followers nav-container__statistics-item"
        data-toggle="modal"
        data-target="#following"
      >
        <span class="bold">{{ this.listOfFollowers.length }}</span> followers
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
                v-for="(following, index) in this.listOfFollowers"
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
        <span class="bold">{{ this.listOfFollowing.length }}</span> following
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
                v-for="(following, index) in this.listOfFollowing"
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
import {
  followUser,
  getUserData,
  getFollowers,
  unfollowUser,
  getFollowings,
  getUserQuestions,
} from '@/services/user.service';
import { getUserId } from '@/utilities/user';

export default {
  data: function() {
    return {
      userInfo: '',
      followed: false,
      myId: getUserId(),
      followHover: false,
      listOfFollowers: [],
      listOfFollowing: [],
      listOfQuestions: [],
      userId: window.location.pathname.split('/').pop(),
    };
  },
  components: {
    'follow-item': () => import('@/components/FollowItem/FollowItem'),
  },
  methods: {
    setUseInfo: function() {
      getUserData(this.userId).then(res => {
        this.userInfo = res;
      });
    },
    setUserFollowers: function() {
      getFollowers(this.userId).then(res => {
        res.followers.forEach(id => {
          getUserData(id).then(follower => {
            this.listOfFollowers.push(follower);
          });
        });
      });
    },
    setUserFollowings: function() {
      getFollowings(this.userId).then(res => {
        res.followings.forEach(id => {
          getUserData(id).then(following => {
            this.listOfFollowing.push(following);
          });
        });
      });
    },
    setUserQuestions: function() {
      getUserQuestions(this.userId).then(res => {
        this.listOfQuestions = res;
      });
    },
    setFollowStatus: function() {
      if (this.myId !== this.userId) {
        getFollowers(this.userId).then(res => {
          this.followed = res.followers.includes(this.myId);
        });
      }
    },
    getUserData: function() {
      this.setUseInfo();
    },

    follow: function() {
      if (this.followed) {
        unfollowUser(this.myId, this.userId);
      } else {
        followUser(this.myId, this.userId);
      }
      this.followed = !this.followed;
    },
  },
  mounted() {
    this.getUserData();
    this.setFollowStatus();
    this.setUserQuestions();
    this.setUserFollowers();
    this.setUserFollowings();
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  padding-bottom: 20px;
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

    @media (max-width: 768px) {
      padding-left: 0;
    }
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

.description-container {
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
