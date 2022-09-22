// import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://dict.cfunworld.com/img/public/notfound700x350.png',
  loading: '/loading.gif',
  attempt: 1
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
