import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { Button, Select, Notification, Input } from 'element-ui';
import App from './App.vue'
import routes from './router/index'
import $ from 'jquery'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(Select)
// Vue.use(Button)
// Vue.use(Input)
// Vue.prototype.$notify = Notification;

const router = new VueRouter({
    routes
})

new Vue({
    router,
    el: '#app',
    $,
    render: h => h(App)
})
