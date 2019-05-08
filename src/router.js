import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const menuRouters = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home")
  },{
    path: "/classify",
    name: "Classify",
    component: () => import("@/views/Classify")
  },{
    path: "/activity",
    name: "Activity",
    component: () => import("@/views/Activity")
  },{
    path: "/shopCart",
    name: "ShopCart",
    component: () => import("@/views/ShopCart")
  },{
    path: "/person",
    name: "Person",
    component: () => import("@/views/Person")
  },
]
export default new Router({
  routes: [...menuRouters]
});
