import Vue from 'vue'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select, Notification, Input } from 'element-ui';
import App from './App.vue'

// Vue.use(ElementUI)
Vue.use(Select)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$notify = Notification;

new Vue({
  el: '#app',
  render: h => h(App)
})
