<template>
  <div class="contact-us">
    <div class="contact-us__card">
      <img src="https://avatars.githubusercontent.com/u/40190772?v=4" alt="avatar" class="avatar" />
      <div>
        Abdullah Hemdan
      </div>
      <div class="contact-us__social">
        <a href="https://github.com/AbdallahHemdan">
          <img class="icon" src="@/assets/svgs/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/abdallah-a-hemdan/">
          <img class="icon" src="@/assets/svgs/linkedin.svg" />
        </a>
        <a href="#">
          <img class="icon" src="@/assets/svgs/gmail.svg" />
        </a>
      </div>
    </div>

    <div class="contact-us__card">
      <img src="https://avatars.githubusercontent.com/u/44409979?v=4" alt="avatar" class="avatar" />
      <div>
        Abd-Elrahman Fadl
      </div>
      <div class="contact-us__social">
        <a href="https://github.com/Abdelrhmanfdl">
          <img class="icon" src="@/assets/svgs/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/abdelrhman-fadl-27756316a/">
          <img class="icon" src="@/assets/svgs/linkedin.svg" />
        </a>
        <a href="#">
          <img class="icon" src="@/assets/svgs/gmail.svg" />
        </a>
      </div>
    </div>

    <div class="contact-us__card">
      <img src="https://avatars.githubusercontent.com/u/40351413?v=4" alt="avatar" class="avatar" />
      <div>
        Adel Rizq
      </div>
      <div class="contact-us__social">
        <a href="https://github.com/AdelRizq">
          <img class="icon" src="@/assets/svgs/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/adel-rizq/">
          <img class="icon" src="@/assets/svgs/linkedin.svg" />
        </a>
        <a href="#">
          <img class="icon" src="@/assets/svgs/gmail.svg" />
        </a>
      </div>
    </div>

    <div class="contact-us__card">
      <img src="https://avatars.githubusercontent.com/u/43186742?v=4" alt="avatar" class="avatar" />
      <div>
        Ahmed Mahboub
      </div>
      <div class="contact-us__social">
        <a href="https://github.com/Mahboub99">
          <img class="icon" src="@/assets/svgs/github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-mahboub/">
          <img class="icon" src="@/assets/svgs/linkedin.svg" />
        </a>
        <a mailto="ahmed.mahboub99@gmail.com">
          <img class="icon" src="@/assets/svgs/gmail.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  padding-top: 40px;
  text-align: center;

  &__card {
    width: 50%;
    font-size: 20px;
    font-weight: 700;
    padding: 20px;
    margin: auto;
  }
  &__social {
    color: $main-color;
  }
  @media (max-width: 768px) {
    display: block;
  }
}
.icon {
  width: 30px;
  margin: 10px;
}
.avatar {
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
</style>
