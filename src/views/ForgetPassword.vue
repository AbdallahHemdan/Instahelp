<template>
  <div class="container c-auth-wrapper">
    <div class="row">
      <left-auth></left-auth>

      <div class="c-auth-right-col text-center">
        <auth-header :showPasswordLock="true" />

        <div
          :class="{
            alert: true,
            'alert-danger': !success,
            'alert-success': success,
            'err-msg': true,
          }"
          role="alert"
          v-show="this.errMessage"
        >
          {{ this.errMessage }}
        </div>

        <form>
          <div class="form-label-group">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Enter your email address"
              v-model="email"
            />
          </div>

          <div class="options">
            <div class="options__first">
              <button
                type="button"
                class="btn btn-primary btn-block auth-btn"
                @click="forgetPassword"
              >
                Send Login Link
              </button>

              <button
                type="button"
                class="btn btn-secondary btn-block auth-btn"
                @click="handleBackToLogin"
              >
                <span class="fa fa-angle-double-left"></span>
                Back to Log In
              </button>
            </div>

            <or-divider></or-divider>

            <div class="options__second">
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

export default {
  name: 'ForgetPassword',
  data: function() {
    return {
      email: '',
      errMessage: '',
      success: false,
    };
  },
  components: {
    'left-auth': () => import('@/components/LeftAuth/LeftAuth'),
    'or-divider': () => import('@/components/OrDivider/OrDivider'),
    'auth-header': () => import('@/components/AuthHeader/AuthHeader'),
  },
  methods: {
    forgetPassword: function() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(user => {
          this.errMessage = 'Please check your email to reset your password';
          this.success = true;
        })
        .catch(err => {
          this.errMessage = err.message;
          this.success = false;
        });
    },
    handleBackToLogin: function() {
      window.location = '/login';
    },
  },
};
</script>

<style lang="scss" scoped>
.have-account {
  margin-top: 15px;

  &__link {
    padding: 5px;
  }
}

.options {
  &__first {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .auth-btn {
      padding: 6px;
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
</style>
