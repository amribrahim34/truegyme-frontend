import HomeView from "@/views/HomeView.vue";
import CatalogView from "@/views/CatalogView.vue";
// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/catalog", name: "Catalog", component: CatalogView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
