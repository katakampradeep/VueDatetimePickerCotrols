// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import DatePicker from './components/DatePicker.vue'
import { videoPlayer } from 'vue-video-player'
// import './assets/markers/videojs-markers.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.use(DatePicker)
Vue.use(videoPlayer)
