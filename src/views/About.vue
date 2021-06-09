<template>
  <div class="about">
    <div class="about__title">Why Intsahelp Exists</div>
    <div class="about__content">
      Intsahelp’s mission is to share and grow the world’s knowledge. A vast
      amount of the knowledge that would be valuable to many people is currently
      only available to a few — either locked in people’s heads, or only
      accessible to select groups. We want to connect the people who have
      knowledge to the people who need it, to bring together people with
      different perspectives so they can understand each other better, and to
      empower everyone to share their knowledge for the benefit of the rest of
      the world.
    </div>
    <img
      src="https://qsf.fs.quoracdn.net/-4-images.static_pages.about.illo_800.png-26-56a917c5d847bcfc.png"
      alt="about image"
      class="about__photo"
    />
    <div class="about__title">Gather Around a Question</div>
    <div class="about__content">
      Intsahelp has only one version of each question. It doesn’t have a left
      wing version, a right wing version, a western version, and an eastern
      version. Intsahelp brings together people from different worlds to answer
      the same question, in the same place — and to learn from each other. We
      want Intsahelp to be the place to voice your opinion because Intsahelp is
      where the debate is happening. We want the Intsahelp answer to be the
      definitive answer for everybody forever.
    </div>
    <div class="about__title">Understand World and People In It</div>
    <div class="about__content">
      Intsahelp has content you will feel good about having read. Intsahelp
      helps you understand why the world works the way it does, why people
      behave the way they do, and what we can all do to make the world better.
      Intsahelp provides a personalized feed of insightful answers to questions
      you hadn’t realized you should ask.
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  padding: 20px 0 20px 0;

  &__title {
    font-size: 35px;
    font-weight: 700;
    padding: 20px;
  }
  &__content {
    text-align: left;
    font-size: 20px;
    width: 60%;
    margin: auto;
  }
  &__photo {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 10px;

    &__content {
      width: 100%;
    }
  }
}
</style>
