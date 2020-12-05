<template>
  <div>
    <h1>Welcome to Vue.js 3</h1>
    <child-two />
  </div>
</template>

<script>
import ChildTwo from "./ChildTwo.vue";
export default {
  name: "Parent",
  components: {
    ChildTwo
  }
};
</script>

<style scoped></style>
