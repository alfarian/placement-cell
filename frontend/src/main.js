/*!

 =========================================================
 * Vue Placement Cell - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import 'bootstrap/dist/css/bootstrap.min.css'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(PaperDashboard);
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
