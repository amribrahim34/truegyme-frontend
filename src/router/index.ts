import HomeView from "@/views/HomeView.vue";
import SearchView from "@/views/SearchView.vue";
// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/search", name: "Search", component: SearchView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
