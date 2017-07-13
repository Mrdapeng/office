import Vue from 'vue'
import Router from 'vue-router'
/*tab*/
import  tab from '../components/officeDetail/tab.vue'
import appraisement from '../components/appraisement/appraisement.vue'
import assetsliabilities from '../components/assetsliabilities/assetsliabilities.vue'
import debt from '../components/debt/debt.vue'
import cash from '../components/financialanalysis/cash.vue'
import income from '../components/income/income.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tab',
      name: tab,
      redirect:'/tab/appraisement',
      component: tab,
      children: [
        {path: '/tab/appraisement', component: appraisement},
        {path: '/tab/assetsliabilities', component: assetsliabilities},
        {path: '/tab/debt', component: debt},
        {path: '/tab/cash', component: cash},
        {path: '/tab/income', component: income}


      ]
    },
    {
      path: '/',
      redirect: '/tab/appraisement'
    }
  ]

})
