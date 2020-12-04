<template>
  <div>
    <input type="text" v-model="password" />
    <div data-test="error-msg" v-if="error">{{ error }}</div>
  </div>
</template>
<script>
import { ref, computed, toRefs } from "vue";
export default {
  name: "password",
  setup(props) {
    const { minLength } = toRefs(props);
    const password = ref("");

    const error = computed(() => {
      if (password.value.length < minLength.value) {
        return `Password must be at least ${minLength.value} characters.`;
      }
      return false;
    });

    return {
      password,
      error,
    };
  },
  props: {
    minLength: {
      type: Number,
    },
  },
};
</script>