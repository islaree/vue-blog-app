<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import { Posts } from "../types/post";

const store = useStore();

const posts = computed<Posts>(() => store.state.posts);
</script>

<template>
  <ul v-if="posts" class="posts">
    <li v-for="post in posts" :key="post.id" class="post">
      <RouterLink :to="`/${post.id}`">
        <p class="post-title">{{ post.title }}</p>
        <p class="post-comment">{{ post.comment?.length }} comments</p>
      </RouterLink>
    </li>
  </ul>
</template>

<style>
.posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post {
  font-size: 16px;
}

.post-title {
  letter-spacing: -0.025em;
}

.post-comment {
  letter-spacing: -0.025em;
  color: #777;
}
</style>
