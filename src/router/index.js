import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/report",
      component: () => import('../views/FormForReport.vue'),
    },
    {
      path: "/tailwind",
      component: () => import('../views/TailwindPreview.vue'),
    },
  ],
});

export default router;
