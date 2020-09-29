import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/router";
//import myi18n from './util'

createApp(App).use(router)   //.use(myi18n)
.mount("#app");
