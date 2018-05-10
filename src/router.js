import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home";
import User from "./pages/User";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/users",
      component: User
    }
  ]
});

export default router;
