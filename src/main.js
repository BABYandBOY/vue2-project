import Vue from 'vue'
import router from './router'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.css'

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
