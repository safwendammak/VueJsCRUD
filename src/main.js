import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routes.js'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// eslint-disable-next-line no-unused-vars

// const router = new VueRouter({mode: 'history', routes});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

