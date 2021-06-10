<template>
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
              placeholder="Password"
              v-model="password"
            />
          </div>

          <div class="options">
            <div class="options__first">
              <button type="submit" class="btn btn-block auth-btn" @click.prevent="login">
                Log In
              </button>
            </div>

            <div class="options__second">
              <div class="forgot">
                <a href="./forget" class="forgot__link">
                  Forgot password?
                </a>
              </div>

              <div class="have-account">
                <span>Don't have an account? </span>
                <a href="./signup" class="have-account__link">Sign up</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { addUser, getUserByEmail } from '@/services/user.service';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errMessage: '',
    };
  },
  components: {
    'left-auth': () => import('@/components/LeftAuth/LeftAuth'),
    'or-divider': () => import('@/components/OrDivider/OrDivider'),
    'auth-header': () => import('@/components/AuthHeader/AuthHeader'),
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            window.location = '/';
          },
          err => {
            if (err.code === 'auth/invalid-email') {
              this.errMessage = err.message;
            } else if (err.code === 'auth/wrong-password') {
              this.errMessage = 'The password is invalid';
            }
          },
        );
    },
    authWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          getUserByEmail(res.user.email).then(user => {
            if (!user) {
              let userData = {
                email: res.user.email,
                name: res.user.displayName,
              };

              addUser(userData).then(() => {
                window.location = '/';
              });
            } else {
              /**
               * Update user data in local-storage
               */
              localStorage.removeItem('user_id');
              localStorage.removeItem('user_image');
              localStorage.removeItem('description');
              localStorage.removeItem('displayName');
              localStorage.removeItem('user_subtitle');

              localStorage.setItem('user_id', user.user_id);
              localStorage.setItem('displayName', user.name);
              localStorage.setItem('user_image', user.image_url);
              localStorage.setItem('description', user.description);
              localStorage.setItem('user_subtitle', user.sub_title);
              window.location = '/';
            }
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
.have-account {
  margin-top: 15px;

  &__link {
    padding: 5px;
    color: $main-color;

    &:hover {
      color: $sub-color;
    }
  }
}

.options {
  &__first {
    .auth-btn {
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 6px;
      background-color: $main-color;
      color: $white;

      &:hover {
        background-color: $sub-color;
      }
    }
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

.forgot__link {
  color: $main-color;

  &:hover {
    color: $sub-color;
  }
}
</style>
