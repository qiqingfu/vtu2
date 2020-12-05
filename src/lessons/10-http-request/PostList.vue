<template>
  <div>
    <button @click="getPosts" :disabled="loading">Get posts</button>
    <p v-if="loading" role="alert">Loading your posts…</p>
    <ul>
      <li v-for="post in posts" :key="post.id" data-test="post">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "PostList",
  setup() {
    let posts = ref([]);
    let loading = ref(false);
    const getPosts = async () => {
      loading.value = true;
      posts.value = await axios.get("/api/posts");
      loading.value = false;
    };

    return {
      loading,
      posts,
      getPosts
    };
  }
};
</script>

<style scoped></style>
