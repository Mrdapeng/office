import Vue from 'vue'
import Router from 'vue-router'
/*tab*/
import  tab from '../components/officeDetail/tab.vue'
import appraisement from '../components/appraisement/appraisement.vue'
import assetsliabilities from '../components/assetsliabilities/assetsliabilities.vue'
import cashflow from '../components/cashflow/cashflow.vue'
import financialanalysis from '../components/financialanalysis/financialanalysis.vue'
import income from '../components/income/income.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: tab,
      component: tab,
      children: [
        {path: '/tab/appraisement', component: appraisement},
        {path: '/tab/assetsliabilities', component: assetsliabilities},
        {path: '/tab/cashflow', component: cashflow},
        {path: '/tab/financialanalysis', component: financialanalysis},
        {path: '/tab/income', component: income}


      ]
    }
  ]
})
