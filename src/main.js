import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app1 = createApp(App).use(store).use(router);
app1.mount("#app1");
