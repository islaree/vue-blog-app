import { createStore } from "vuex";
import { getPosts } from "../api/posts";
import { Posts } from "../types/post";

const store = createStore<{ posts: Posts }>({
  state() {
    return {
      posts: [],
    };
  },
  getters: {
    getPostById: (state) => (id: number) => {
      return state.posts.find((post) => post.id === id);
    },
  },
  mutations: {
    setPosts(state, posts: Posts) {
      state.posts = posts;
    },
    setComment(state, { id, comment }) {
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.comment?.push(comment);
      }
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const posts = await getPosts();
      commit("setPosts", posts);
    },
  },
});

export default store;
