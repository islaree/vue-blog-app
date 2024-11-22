<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { Post } from "../types/post";

const route = useRoute();
const store = useStore();
const post = computed<Post>(() => store.getters.getPostById(+route.params.id));
const comment = ref("");

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (post.value) {
    store.commit("setComment", {
      id: post.value.id,
      comment: { id: Date.now(), text: comment.value },
    });
    comment.value = "";
  }
};

const convertToHalfWidth = (input: string): string => {
  return input.replace(/[０-９]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0xfee0)
  );
};

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  comment.value = convertToHalfWidth(target.value);
};
</script>

<template>
  <RouterLink to="/">← back</RouterLink>
  <div v-if="post">
    <h2 class="page-title">{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <div class="post-comments">
      <div class="post-comments-title">All comments</div>
      <ul class="comments">
        <li v-for="c in post.comment" :key="c.id" class="comments-item">
          <span>john doe:</span> {{ c.text }}
        </li>
      </ul>
    </div>
  </div>
  <form class="post-comment-form" @submit="handleSubmit">
    <div class="post-form-textarea">
      <textarea
        v-model="comment"
        placeholder="Please enter a comment..."
      ></textarea>
    </div>
    <div>
      <button>submit</button>
    </div>
  </form>
  <form>
    <input type="search" inputmode="numeric" @input="handleInput" />
  </form>
</template>

<style>
.post-comments {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #efefef;
}

.post-comments-title {
  margin-bottom: 16px;
  font-weight: semibold;
}

.post-comment-form {
  display: block;
  margin-top: 20px;
}

.post-form-textarea {
  width: 100%;
}

textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

.comments {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}

.comments-item span {
  color: #777;
}
</style>
