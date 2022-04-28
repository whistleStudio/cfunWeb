// import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://s1.ax1x.com/2022/04/28/LO3ge0.png',
  loading: '/loading.gif',
  attempt: 1
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
