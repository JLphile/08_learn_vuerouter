<template>
  <div>
    <!-- <h2>User:{{ $route.params.username }}</h2> -->
    <h2>用户:{{ $route.params.username }}-ID:{{ $route.params.id }}</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  created() {
    // console.log(this.$route.params.username);
  },
  setup() {
    const route = useRoute();
    // console.log(route.params.username);
    // console.log(route.params.id);
  },
};
</script>

<style scoped></style>
