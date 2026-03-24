import { createRouter, createWebHistory } from "vue-router";
import LayoutPrincipal from "../modules/home/layout/layoutPrincipal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/misBancos",
      component: LayoutPrincipal,
      children: [
        {
          path: "misBancos",
          name: "mis-bancos",
          component: () => import("../modules/home/views/misBancos.vue")
        },
        {
          path: "contribuidores",
          name: "contribuidores",
          component: () => import("../modules/home/views/contribuidores.vue")
        },
        {
          path: "misBancos/:id",
          name: "banco-detalle",
          component: () => import("../modules/home/views/bancodetalle.vue")
        }
      ]
    }
  ]
});

export default router;
