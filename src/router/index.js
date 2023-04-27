import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/dirdom",
    name: "dirdom",
    component: () => import("./../components/dirdom.vue"),
  },
  {
    path: "/for",
    name: "for",
    component: () => import("./../components/for.vue"),
  },
  {
    path: "/click",
    name: "click",
    component: () => import("./../components/click.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () => import("./../components/button.vue"),
  },
  {
    path: "/computed",
    name: "computed",
    component: () => import("./../components/computed.vue"),
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("./../components/todos.vue"),
  },
  {
    path: "/lifecycle",
    name: "lifecycle",
    component: () => import("./../components/lifeCycle.vue"),
  },
  {
    path: "/lifecycle3",
    name: "lifecycle3",
    component: () => import("./../components/lifecycle3.vue"),
  },
  {
    path: "/ref",
    name: "ref",
    component: () => import("./../components/ref.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
