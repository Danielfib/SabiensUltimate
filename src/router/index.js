import Vue from "vue";
import Router from "vue-router";
import Home from "../screens/home.vue";
import Galeria from "../screens/galeria.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/galeria",
      name: "Galeria",
      component: Galeria
    }
  ]
});
