// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/reset.css'

// 适配
import 'lib-flexible/flexible'

//Vant组件
import {Toast,Icon,NavBar,Field,Cell,CellGroup,Loading,Button,Checkbox} from 'vant';
Vue.use(Toast).use(Icon).use(NavBar).use(Field).use(Cell).use(CellGroup).use(Loading).use(Button).use(Checkbox);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
