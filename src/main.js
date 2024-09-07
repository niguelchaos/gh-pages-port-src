import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import AOS from 'aos'
import VueLazyload from 'vue-lazyload'
import VueGtag from "vue-gtag";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import CoolLightBox from 'vue-cool-lightbox'
// import LightBox from 'vue-image-lightbox'

// "vue-awesome-swiper": "^4.1.1",
// "vue-cool-lightbox": "^2.7.4",
// "vue-image-lightbox": "^7.2.0"

import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'swiper/css/swiper.css'
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
// import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

Vue.use(VueGtag, {
  config: { id: "UA-224744140-1" },
  appName: 'Portfolio',
  pageTrackerScreenviewEnabled: true
}, router);
// UA-224744140-1

Vue.use(BootstrapVue)
Vue.use(VueLazyload)
// Vue.use(VueAwesomeSwiper)
// Vue.use(CoolLightBox)
// Vue.use(LightBox)

Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) },
  mounted() {
    AOS.init()
  }
}).$mount('#app')
