import type { RouteRecordRaw } from "vue-router";
import Login from "../layout/login.vue";

export const login: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    // redirect : '/login/index',
    component: Login,
    children: []
  }
];
