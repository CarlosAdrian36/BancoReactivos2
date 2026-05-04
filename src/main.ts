import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "./assets/fontawesome/css/all.css";
import App from "./App.vue";
import router from "./router/index.ts";
import persistedState from "pinia-plugin-persistedstate";

const app = createApp(App);

const pinia = createPinia();
pinia.use(persistedState);
app.use(pinia);
app.use(router);
app.mount("#app");
