<script setup>
import { useStore } from "vuex";

const store = useStore();
store.dispatch("fetchPosts");
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
