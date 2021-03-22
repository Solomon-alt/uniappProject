import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

Vue.config.productionTip = false
Vue.use(uView);

//#ifdef H5
Vue.prototype.$api = '/api'
//#endif

//#ifdef APP-PLUS || MP-WEIXIN
Vue.prototype.$api = 'http://localhost:7001'
//#endif


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
