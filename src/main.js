import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts';
import {auth_token} from "./api/bean/auth"

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;


const app = async fn => {
    await auth_token("admin");
    fn && fn();
};
app(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
});
