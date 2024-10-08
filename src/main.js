import { createApp } from "vue";
import router from "./router/router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
