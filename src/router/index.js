import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/user/login'
import regist from '@/views/user/regist'
import phonelogin from '@/views/user/phonelogin'
import accountlogin from '@/views/user/accountlogin'
import forgetpassword from '@/views/user/forgetpassword'
import bindinglog from '@/views/user/bindinglog'
import tabbaruser from '@/views/user/tabbar-user'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/phonelogin',
      name: 'phonelogin',
      component: phonelogin
    },
    {
      path: '/accountlogin',
      name: 'accountlogin',
      component: accountlogin
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: forgetpassword
    },
    {
      path: '/bindinglog',
      name: 'bindinglog',
      component: bindinglog
    },
    {
      path: '/tabbar-user',
      name: 'tabbar-user',
      component: tabbaruser
    }
  ]
})
