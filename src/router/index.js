import VueRouter from 'vue-router'

import Contact from '../pages/Contact'
import Team from '../pages/Team'
import Home from '../pages/Home'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/leospa-vue-project',
      component: Home
    },
    {
      path: '/leospa-vue-project/contact',
      component: Contact
    },
    {
      path: '/leospa-vue-project/team',
      component: Team
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 }
  },
})