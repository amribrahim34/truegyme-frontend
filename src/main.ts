/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";

// Plugins
import { registerPlugins } from "@/plugins";

const pinia = createPinia();
const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(pinia);

app.mount("#app");
