<template>
  <div class="question container">
    <post v-for="(post, index) in tagQuestions" :key="index" :post="post"></post>
  </div>
</template>

<script>
import { getTagsByName } from './../services/tag.service';

export default {
  name: 'tag',
  data: function() {
    return {
      id: '',
      tagQuestions: [],
    };
  },
  methods: {
    setTagData: function() {
      getTagsByName(this.id).then(res => {
        this.tagQuestions = res;
      });
    },
  },
  components: {
    post: () => import('./../components/Post/Post.vue'),
  },
  mounted() {
    this.id = this.$route.params.id;
    this.setTagData();
  },
};
</script>

<style lang="scss">
.ti-input {
  padding: 0 !important;
  border: none !important;
}

.ti-new-tag-input-wrapper {
  display: none !important;
}

.vue-tags-input {
  max-width: 100% !important;
}

.ti-tag {
  background-color: #007bff !important;
  padding: 4px 12px !important;
}
</style>
