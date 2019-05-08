import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CubeUI from "cube-ui"
import Vant from "vant";
import "vant/lib/index.css";
// import "./style/reset.scss"

Vue.use(CubeUI);
Vue.use(Vant);

import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
