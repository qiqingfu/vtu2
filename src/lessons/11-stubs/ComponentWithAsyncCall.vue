<template>
  <h1>{{ msg }}</h1>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    let msg = ref("");

    const makeApiCall = () => {
      console.log("Making api call");
      new Promise((resolve, reject) => {
        setImmediate(() => resolve("Hello"), 200);
      }).then((result) => {
        msg.value = result;
      });
    };

    onMounted(() => {
      makeApiCall();
    });

    return {
      msg,
    };
  },
};
</script>