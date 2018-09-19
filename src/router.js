import Vue from 'vue'
import Router from 'vue-router'
import Pie from './Pie'
import Area from './Area'
Vue.use(Router)

export default new Router({
    routes : [
        { path: '/pie', component: Pie },
        { path: '/area', component: Area }
      ]
})