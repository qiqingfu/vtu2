<template>
  <p>{{ result }}</p>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "Child",
  setup() {
    const result = ref("暂无用户信息");
    const getInfo = async () => {
      result.value = await axios.get("/api/info");
    };
    onMounted(() => {
      getInfo();
    });
    return {
      result,
      getInfo
    };
  }
};
</script>

<style scoped></style>
