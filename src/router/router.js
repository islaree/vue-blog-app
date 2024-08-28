import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/:id", component: PostView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
