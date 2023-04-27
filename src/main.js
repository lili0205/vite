import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Abb from "./Abb.vue";

const app1 = createApp(App).use(store).use(router);
app1.mount("#app1");
// const app1 = createApp(Abb).use(store).use(router);
// app1.mount("#app1");
