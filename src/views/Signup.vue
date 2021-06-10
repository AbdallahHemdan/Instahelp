<template>
  <div class="login">
    <div class="container c-auth-wrapper">
      <div class="row">
        <left-auth></left-auth>

        <div class="c-auth-right-col text-center">
          <auth-header />

          <div class="social">
            <button
              type="button"
              class="btn btn-primary btn-block social__btn"
              @click="authWithFacebook"
            >
              <span class="fa fa-facebook social__logo"></span>
              Login with facebook
            </button>

            <button
              type="button"
              class="btn btn-danger btn-block social__btn"
              @click="authWithGoogle"
            >
              <span class="fa fa-google social__logo"></span>
              Login with google
            </button>
          </div>

          <or-divider></or-divider>

          <div class="alert alert-danger err-msg" role="alert" v-show="this.errMessage">
            {{ this.errMessage }}
          </div>

          <form>
            <div class="form-label-group">
              <input
                type="text"
                name="username"
                id="username"
                class="form-control"
                placeholder="Enter your username"
                v-model="username"
              />

              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Email address"
                v-model="email"
              />
            </div>

            <div class="form-label-group">
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>

            <div class="form-label-group">
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                class="form-control"
                placeholder="Confirm your password"
                v-model="confirmPassword"
              />
            </div>

            <div class="options">
              <div class="options__first">
                <button type="button" class="btn btn-primary btn-block auth-btn" @click="signup">
                  Sign Up
                </button>
              </div>

              <div class="options__second">
                <p class="conditions">
                  By signing up, you agree to <span>our Terms</span>, <span>Data Policy</span> and
                  <span>Cookies Policy</span>
                </p>

                <div class="have-account">
                  <span>Have an account? </span>
                  <a href="./login" class="have-account__link">Log In</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { addUser } from '@/services/user.service';

export default {
  name: 'Signup',
  data: function() {
    return {
      email: '',
      username: '',
      password: '',
      errMessage: '',
      confirmPassword: '',
    };
  },
  components: {
    'left-auth': () => import('@/components/LeftAuth/LeftAuth'),
    'or-divider': () => import('@/components/OrDivider/OrDivider'),
    'auth-header': () => import('@/components/AuthHeader/AuthHeader'),
  },
  methods: {
    signup() {
      /**
       * Signup fields validation
       */
      if (!this.username) {
        this.errMessage = "Username can't be empty";
        return;
      } else if (this.password != this.confirmPassword) {
        this.errMessage = 'The two passwords are not equal';
        return;
      }

      let userData = {
        email: this.email,
        name: this.username,
      };

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            if (firebase.auth().currentUser) {
              firebase
                .auth()
                .currentUser.updateProfile({
                  displayName: this.username,
                })
                .then(e => {
                  addUser(userData).then(res => {
                    window.location = '/';
                  });
                });
            }
          },
          err => {
            this.errMessage = err.message;
          },
        );
    },
    authWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          let userData = {
            email: res.user.email,
            name: res.user.displayName,
          };

          addUser(userData).then(() => {
            window.location = '/';
          });
        })
        .catch(err => {
          alert('Oops. ' + err.message);
        });
    },
    authWithFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(res) {
          let userData = {
            email: res.user.email,
            name: res.user.displayName,
          };

          addUser(userData).then(() => {
            window.location = '/';
          });
        })
        .catch(function(error) {
          alert('Oops. ' + error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-btn {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 6px;
}

.conditions {
  color: $dark-gray;

  span {
    font-weight: 600;
  }
}

.have-account {
  margin-top: 15px;

  &__link {
    padding: 5px;
  }
}

.form-control {
  background: $white-smoke;
  padding: 8px 0 8px 10px;
  color: $darker-gray;
  font-size: $font-size-2x;
  line-height: 18px;
  min-height: 40px;
  margin-bottom: 1rem;
}
</style>
