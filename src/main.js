import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
// import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import * as VueGoogleMaps from "vue2-google-maps";


Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "places" // necessary for places input
  }
});


new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
