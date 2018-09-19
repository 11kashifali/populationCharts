import Vue from 'vue'
import Router from 'vue-router'
import Pie from './Pie'
import Area from './Area'
Vue.use(Router)

export default new Router({
    routes : [
        { path: '/', component:Pie},
        { path: '/pie', component: Pie },
        { path: '/area', component: Area }
      ]
})