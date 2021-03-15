import Vue from 'vue'
import App from './App.vue'
import router from './router'
//图标
import './static/iconfont/iconfont.css'
//挂载轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
//视频播放器
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
