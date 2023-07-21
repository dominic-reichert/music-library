import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/composers/:id",
    name: "composerWorks",
    component: () => import("../views/ComposerWorksView.vue"),
  },
  {
    path: "/search/:searchterms",
    name: "searchResults",
    component: () => import("../views/SearchResultsView.vue"),
  },
  {
    path: "/epoch/:epoch",
    name: "epochDetails",
    component: () => import("../views/EpochDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
