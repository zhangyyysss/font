import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
// method1 to zh-cn 本地化方式自定义成中文
// import zh from 'vee-validate/dist/locale/zh_CN'

// method1 to zh-cn
// Validator.localize('zh-CN', zh)

// method2 to zh-cn 自定义的方式(顺序不能变,import在Vue.use(VeeValidate)之前.否则报错,对啊,import都在前面才对))(推荐方法二)
import './local/index'

Vue.use(VeeValidate) // (先注册VeeValidate组件,这样,下面就可以修改成功中文了,顺序不能调换)

// method2 to zh-cn
const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

// 设置如果是生产阶段是localhost:3000端口,如果不是生产环境就是我们域名端口,比以前的自己设置baseURL方便一点?
axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'http://http://42.193.174.243:12005/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
