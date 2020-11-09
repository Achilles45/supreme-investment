import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import Glossary from '../views/Glossary.vue'
import Trading from '../views/Trading.vue'
import Signup from '../views/Signup.vue'
import Faqs from '../views/Faqs.vue'
import Signin from '../views/Signin.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile'
import Payment from '../views/Payment.vue'
import Withdrawal from '../views/Withdrawal.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
  // {
  //   path: '/glossary',
  //   name: 'Glossary',
  //   component: Glossary
  // },
  // {
  //   path: '/how-to-trade',
  //   name: 'Trading',
  //   component: Trading
  // },
  // {
  //   path: '/faqs',
  //   name: 'Faqs',
  //   component: Faqs
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: Signup
  // },
  // {
  //   path: '/signin',
  //   name: 'Signin',
  //   component: Signin
  // },
  // {
  //   path: '/dashboard/overview',
  //   name: 'dashboard',
  //   component: Dashboard
  // },
  // {
  //   path: '/dashboard/profile',
  //   name: 'Profile',
  //   component: Profile
  // },
  // {
  //   path: '/dashboard/payment',
  //   name: 'Payment',
  //   component: Payment
  // },
  // {
  //   path: '/dashboard/withdrawal',
  //   name: 'Withdrawal',
  //   component: Withdrawal
  // },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPositions){
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) =>{
  //Check if the route we are about to enter has a guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //Check auth state
    let user = firebase.auth().currentUser
    if(user){
      //Grant the user access as he is signed in, proceed to user
      next()
    }else{
      //Redirect to login
      next({name: 'Signin'})
    }
  }else{
    //If the routes does not requires auth, then just proceed as normal
    next()
  }
})


export default router

