import type { RouteRecordRaw } from "vue-router";
import Login from "../layout/login.vue";

export const login: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    redirect: "/login/ingresar",
    component: Login,
    children: [
      {
        path: "ingresar",
        name: "Ingresar",
        component: () => import("..//views/ingreso.vue")
      },
      {
        path: "enviar-correo",
        name: "EnviarCorreo",
        component: () => import("../views/enviodeCorreo.vue")
      },
      {
        path: "restablecer-contrasena",
        name: "RestablecerContrasena",
        component: () => import("../views/restablecerContrasena.vue")
      }
    ]
  }
];
